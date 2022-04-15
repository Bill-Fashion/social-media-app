import PostSchema from "../models/postSchema.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
	try {
		const postSchema = await PostSchema.find();

		res.status(200).json(postSchema);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createPost = async (req, res) => {
	const post = req.body;
	const newPost = new PostSchema(post);
	try {
		await newPost.save();
		res.status(201).json(newPost);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
export const updatePost = async (req, res) => {
	const { id: _id } = req.params;
	const post = req.body;

	if (!mongoose.Types.ObjectId.isValid(_id)) {
		return res.status(404).send("No post available");
	}

	const updatedPost = await PostSchema.findByIdAndUpdate(_id, post, {
		new: true,
	});
	res.json(updatedPost);
};
export const deletePost = async (req, res) => {
	const { id: _id } = req.params;
	const post = req.body;

	if (!mongoose.Types.ObjectId.isValid(_id)) {
		return res.status(404).send("No post available");
	}

	const updatedPost = await PostSchema.findByIdAndRemove(_id);
	res.json({ message: "Post delete successfully" });
};
export const likePost = async (req, res) => {
	const { id: _id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(_id)) {
		return res.status(404).send("No post available");
	}

	const post = await PostSchema.findById(_id);
	const updatePost = await PostSchema.findByIdAndUpdate(
		_id,
		{ likeCount: post.likeCount + 1 },
		{ new: true }
	);
	res.json(updatePost);
};
