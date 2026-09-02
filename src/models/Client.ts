import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    company: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    addressLines: {
        type: [String],
        default: [],
    },
    currency: {
        type: String,
        default: "EUR",
    },
    notes: {
        type: String,
    },
}, { timestamps: true })

export default mongoose?.models?.Client || mongoose.model("Client", ClientSchema)
