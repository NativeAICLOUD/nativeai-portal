'use client';

import { SessionProvider } from 'next-auth/react';


const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return children;
  // return (
  //   <SessionProvider>
  //     {children}
  //   </SessionProvider>
  // );
};

export default AppProviders;
