import mongoose, { Document, Schema } from 'mongoose';

export interface ILike extends Document {
    post: mongoose.Types.ObjectId;
    user: mongoose.Types.ObjectId;
}

const likeSchema: Schema = new Schema(
    {
        post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    },
    { timestamps: true }
);

const LikeModel = mongoose.model<ILike>('Like', likeSchema);
export default LikeModel;
