import axios from 'axios';

const url =     'https://memories-46ic.onrender.com/posts' //'http://localhost:5000/posts'  

export const fetchAllPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, {...newPost, createdAt: new Date()});
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)

