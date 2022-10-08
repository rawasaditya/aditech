import { Schema, model, models } from "mongoose";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    thumbnail: {
      type: String,
      required: [true, "thumbnail is required"],
    },
  },
  {
    timestamps: true,
  }
);

const BookModel = models.BookModel || model("BookModel",bookSchema);
export default BookModel;