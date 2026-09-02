import mongoose from "mongoose";
import { COMPANY_INFO } from "@/lib/invoice-data";

const LineItemSchema = new mongoose.Schema({
    description: { type: String, required: true },
    unitCost: { type: Number, required: true, default: 0 },
    qty: { type: Number, required: true, default: 1 },
    amount: { type: Number, required: true, default: 0 },
}, { _id: false })

const InvoiceSchema = new mongoose.Schema({
    invoiceNumber: {
        type: String,
        required: true,
        unique: true,
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client",
        required: true,
    },
    issueDate: {
        type: Date,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    lineItems: {
        type: [LineItemSchema],
        default: [],
    },
    subtotal: {
        type: Number,
        required: true,
        default: 0,
    },
    taxRate: {
        type: Number,
        default: 0,
    },
    tax: {
        type: Number,
        default: 0,
    },
    shipping: {
        type: Number,
        default: 0,
    },
    total: {
        type: Number,
        required: true,
        default: 0,
    },
    currency: {
        type: String,
        default: "EUR",
    },
    exchangeRateNote: {
        type: String,
    },
    terms: {
        type: String,
        default: COMPANY_INFO.defaultTerms,
    },
    status: {
        type: String,
        enum: ["draft", "sent", "paid"],
        default: "draft",
    },
    sentAt: {
        type: Date,
    },
}, { timestamps: true })

export default mongoose?.models?.Invoice || mongoose.model("Invoice", InvoiceSchema)
