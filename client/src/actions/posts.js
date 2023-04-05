import * as api from '../api/index.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes.js';

// action creators - functions that return actions

export const fetchAllPosts = ()=> async( dispatch)=>{
    try{
        // its async , becoz we are at the frontend: localhost:3000, and we are trying to access
        // all the posts at localhost:5000
        const {data} = await api.fetchAllPosts(); // we got all posts at localhost:5000
        dispatch({type: FETCH_ALL, payload: data});
    }catch(error){
        console.log('fetch problem:::',error.message);
    }
}

export const createPost = ( post)=> async (dispatch)=>{
    try{
        // similarly while pushing filled in {postData} from localhost:3000 -> localhost:5000, 
        // server needs some time to convert our sent data to an object(which has _id prop too)
        // which is then returned
        // back as a  response ( the response is saved in {data})

        // we also need to store our filled in data to the redux-store for future reference, right?
        // thats exactly y we are calling the {dispatch()}
        const {data} = await api.createPost(post);
        console.log('action creatPost calling api.createPost(post)', data)
        dispatch({type: CREATE, payload: data});
    }catch(error){
        console.log(error.message);
    }
}


/*
    in the form , type in the data and click on the button (submit) , 
    on submitting, we call dispatch createPost(postData) 
*/

export const updatePost = (id, post) => async(dispatch)=>{
    try{
        const {data}= await api.updatePost(id, post);
        dispatch({type: UPDATE, payload:data})
    }catch(error){
        console.log(error.message);
    }
}

export const deletePost = (id) => async(dispatch)=>{
    try{
        await api.deletePost(id);
        // console.log('delele post client')
        dispatch({type: DELETE, payload: id});
    }catch(error){
        console.log(error.message)
    }
}

export const likePost = (id) =>async(dispatch)=> {
    try{
        // data is what we receive from the backend
        const {data} = await api.likePost(id);
        dispatch({type: LIKE, payload: data});
    }catch(error){
        console.log(error)
    }
}