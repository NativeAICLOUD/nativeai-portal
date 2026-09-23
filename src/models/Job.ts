import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    department: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    workModel: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    responsibilities: {
        type: [String],
        default: [],
    },
    requirements: {
        type: [String],
        default: [],
    },
    preferredRequirements: {
        type: [String],
        default: [],
    },
    benefits: {
        type: [String],
        default: [],
    },
    skills: {
        type: [String],
        default: [],
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

export default mongoose?.models?.Job || mongoose.model("Job", JobSchema)
