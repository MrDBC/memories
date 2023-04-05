import mongoose from "mongoose";
import express from 'express';

import PostMessage from "../models/postMessage.js"

// const router = express.Router();

export const fetchAllPosts = async (req, res)=>{
    try{
        const postMessages =await PostMessage.find();
        res.status(200).json(postMessages);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res)=>{
    // const { title, message, selectedFile, creator, tags } = req.body;
    // console.log('hi there');
    // const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    // try {
    //     await newPostMessage.save();
    //     res.status(201).json(newPostMessage );
    // } catch (error) {
    //     res.status(409).json({ message: error.message });
    // }

    const post = req.body;
    const newPost = new PostMessage(post);

    try{
        await newPost.save();
        
        res.status(201).json(newPost);
    }catch(error){
        res.status(409).json({message: error.message});
    }
}

export const updatePost= async(req, res)=>{
    // const { id } = req.params;
    // const { title, message, creator, selectedFile, tags } = req.body;
    
    // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    // const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    // await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    // res.json(updatedPost);
    
    const {id:_id} = req.params; // renaming id to _id
    const post = req.body; // sent from the client side
        
    if( !mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send(`No posts with id: ${_id}`);
    
    const updatedPost =  await PostMessage.findByIdAndUpdate(_id, { ...post,_id}, {new: true});

    res.json(updatedPost);
}


export const likePost = async(req, res)=>{
    const {id}= req.params;

    if( !mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No posts with id`);

    const post = await PostMessage.findById(id);
    const likedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount+1}, {new: true});

    res.json(likedPost);
}

export const deletePost = async (req, res)=>{
    const {id} = req.params;

    if( !mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No posts with id`);

    await PostMessage.findByIdAndRemove(id);

    res.json({message: 'Post deleted'})
}