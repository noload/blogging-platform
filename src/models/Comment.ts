import mongoose, { Document, Schema } from "mongoose";

interface IComment extends Document {
  content: string;
  author: mongoose.Schema.Types.ObjectId;
  post: mongoose.Schema.Types.ObjectId;
}

const CommentSchema: Schema = new Schema(
  {
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, required: true,ref:'User' },
    post: { type: Schema.Types.ObjectId, required: true,ref:'Post' },
  },
  { timestamps: true }
);

const CommentModel = mongoose.model<IComment>('Comment',CommentSchema);

export default CommentModel;
