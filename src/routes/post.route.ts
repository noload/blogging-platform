import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import postController from '../controllers/post.controller'
const  router:Router = Router();

router.post('/',authMiddleware,roleMiddleware(['author']),postController.createPost)
export default router;

function roleMiddleware(arg0: string[]): import("express-serve-static-core").RequestHandler<{}, any, import("../dtos/post.dto").CreatePostDTO, import("qs").ParsedQs, Record<string, any>> {
    throw new Error("Function not implemented.");
}
