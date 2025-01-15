import mongoose, { Document, Model, Schema, Types } from "mongoose";

interface IPost extends Document {
  title: string;
  content: string;
  tags: string[];
  publiched: boolean;
  author: Schema.Types.ObjectId;
}

const PostSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: [String] },
    publiched: { type: Boolean, required: true, default: false },
    author: { type: Schema.Types.ObjectId,required:true,ref:'User' },
  },
  { timestamps: true }
);

//index
PostSchema.index({ title: "text", content: "text" });

const PostModel = mongoose.model<IPost>('Post',PostSchema);
export default PostModel;