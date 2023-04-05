import React, { useEffect } from "react";
import {Grid, CircularProgress} from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux"; // for accessing the redux store

import Post from "./Post/Post";
import useStyles from './styles'
import { fetchAllPosts } from "../../api";


const Posts = ({setCurrentId})=>{
    const classes = useStyles();
    // const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts); // accessing all posts from store

    // useEffect(()=>{
    //     if(isPostDeleted)
    //         dispatchEvent(fetchAllPosts());
    // }, [isPostDeleted]);

    return(
        !posts.length? <CircularProgress />: (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    posts.map((post)=>(
                        <Grid key={post._id}  item xs={12} sm={6} md={6}>
                            <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default Posts