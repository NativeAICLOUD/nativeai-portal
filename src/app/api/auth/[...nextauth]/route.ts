import db from "@/lib/db";
import { signJwtToken } from "@/lib/jwt";
import User from "@/models/User";
import Otp from "@/models/Otp";
import bcrypt from 'bcrypt';
import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                username: { label: 'Email', type: 'text', placeholder: 'John Doe' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials: any, req) {
                const { email, password } = credentials

                await db.connect()

                const user = await User.findOne({ email })

                if (!user) {
                    throw new Error("Invalid input")
                }

                // 2 parameters -> 
                // 1 normal password -> 123123
                // 2 hashed password -> dasuytfygdsaidsaugydsaudsadsadsauads
                const comparePass = await bcrypt.compare(password, user.password)

                if (!comparePass) {
                    throw new Error("Invalid input")
                } else {
                    const { password, ...currentUser } = user._doc

                    const accessToken = signJwtToken(currentUser, { expiresIn: '6d' })

                    return {
                        ...currentUser,
                        accessToken
                    }
                }
            }
        }),
        CredentialsProvider({
            id: 'otp',
            name: 'OTP',
            credentials: {
                email: { label: 'Email', type: 'text' },
                code:  { label: 'Code',  type: 'text' },
            },
            async authorize(credentials: any) {
                const { email, code } = credentials;
                if (!email || !code) throw new Error('Missing fields');

                await db.connect();

                const otp = await Otp.findOne({ email, used: false });
                if (!otp) throw new Error('Invalid or expired code');
                if (new Date() > otp.expiresAt) throw new Error('Code expired');

                const match = await bcrypt.compare(code, otp.code);
                if (!match) throw new Error('Invalid code');

                await Otp.deleteOne({ _id: otp._id });

                const user = await User.findOne({ email });
                if (!user) throw new Error('No account found for this email');

                const { password: _pw, ...currentUser } = user._doc;
                const accessToken = signJwtToken(currentUser, { expiresIn: '6d' });
                return { ...currentUser, accessToken };
            },
        }),
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.accessToken = user.accessToken
                token._id = user._id
            }

            return token
        },
        async session({ session, token }: any) {
            if (token) {
                session.user._id = token._id
                session.user.accessToken = token.accessToken
            }

            return session
        }
    }
})

export { handler as GET, handler as POST };
