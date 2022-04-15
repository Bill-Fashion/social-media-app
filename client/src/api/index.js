import axios from "axios";

const PostURL = "http://localhost:5000/post";

export const fetchPosts = () => axios.get(`${PostURL}/`);
export const createPost = (newPost) => axios.post(`${PostURL}/`, newPost);
export const updatePost = (id, updatedPost) =>
	axios.patch(`${PostURL}/update/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${PostURL}/${id}`);
export const likePost = (id) => axios.patch(`${PostURL}/like/${id}`);
