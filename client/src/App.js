import React, {useState ,useEffect} from "react";
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import { useDispatch,useSelector } from "react-redux";

import {fetchAllPosts} from './actions/posts'
import memories from '../src/images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'

const App = ()=>{
    const classes = useStyles();
    const dispatch = useDispatch();
    // const posts = useSelector((state)=> state.posts);
    const [currentId, setCurrentId] = useState(0);
    // const [isPostDeleted, setIsPostDeleted] = useState(false);


    useEffect (()=>{
        dispatch(fetchAllPosts());
    }, []);

    return(
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height='60'  />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container  justifyContent="space-between" alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId= {setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;