const mongoose=require('mongoose')
const Schema=mongoose.Schema

const reviewSchema = new Schema({
    movieTitle: { type: String, required: [true,"Enter a name"] },
    reviewText: { type: String, required: true },
    rating: { type: Number, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);