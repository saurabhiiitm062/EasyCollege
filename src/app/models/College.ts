// models/College.ts
import mongoose from 'mongoose'

const collegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  openingRank: { type: Number, required: true },
  closingRank: { type: Number, required: true },
  totalSeats: { type: Number, default: 0 },
  collegeCode: { type: String }, // Optional but helpful
})

export default mongoose.models.College || mongoose.model('College', collegeSchema)
