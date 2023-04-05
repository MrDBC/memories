import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: '30mb', extended : true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended : true}));
app.use(cors());

app.use('/posts', postRoutes); // every routes inside postRoutes are prefixed by '/posts'
app.get('/', (req, res)=>{
    res.send('hello to memories API');
})

// const CONNECTION_URL = 'mongodb+srv://dhandb:Momdad123@cluster0.soekwrf.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// the object not needed
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log(`server running on port : http://localhost:${PORT}`)))
    .catch((error)=> console.log(`${error} didnt connect`))  



      