import express from "express";
const router = express.Router();
import {
	createPost,
	getPosts,
	updatePost,
	deletePost,
	likePost,
} from "../controllers/posts.js";

router.post("/create", createPost);
router.get("/get", getPosts);
router.patch("/update/:id", updatePost);
router.patch("/like/:id", likePost);
router.delete("/delete/:id", deletePost);

export default router;
