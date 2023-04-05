import axios from 'axios';

const url =  'http://localhost:5000/posts' //'https://memories-ok0f.onrender.com/posts';

export const fetchAllPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, {...newPost, createdAt: new Date()});
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)

