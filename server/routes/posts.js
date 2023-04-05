import express from 'express';
import {fetchAllPosts, createPost, updatePost , deletePost, likePost} from '../controllers/posts.js';

const router = express.Router();

router.get('/', fetchAllPosts);
router.post('/', createPost);
router.patch('/:id', updatePost)
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost)

export default router;