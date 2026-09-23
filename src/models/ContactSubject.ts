import mongoose from "mongoose";

const ContactSubjectSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true,
        trim: true,
    },
    order: {
        type: Number,
        default: 0,
    },
    active: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true })

export default mongoose?.models?.ContactSubject || mongoose.model("ContactSubject", ContactSubjectSchema)
