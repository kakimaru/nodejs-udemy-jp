import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
      get: function (val) {
        return Math.round(val);
      },
      set: function (val) {
        return Math.round(val);
      },
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { collection: 'books' },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;
