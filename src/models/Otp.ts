import mongoose from 'mongoose';

const OtpSchema = new mongoose.Schema({
  email:     { type: String, required: true, index: true },
  code:      { type: String, required: true },
  expiresAt: { type: Date,   required: true },
  used:      { type: Boolean, default: false },
});

export default mongoose?.models?.Otp || mongoose.model('Otp', OtpSchema);
