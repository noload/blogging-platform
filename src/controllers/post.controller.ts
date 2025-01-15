import { Request, Response } from "express";
import { CreatePostDTO } from "../dtos/post.dto";
import PostModel from "../models/Post";

const createPost = async (req: Request<{},{},CreatePostDTO>, res: Response) => {
  try {
    const { title, content, tags, published }: CreatePostDTO = req.body;

    const post = new PostModel({
      title,
      content,
      tags,
      published,
      author:req.user.userId
    });
  } catch (error) {
    console.log("CreatePost error", error);
    return res.status(500).json({ message: "Error creating post", error });
  }
};
