import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.png';
import Form from './components/Form/Form';
import PostList from './components/PostList/PostList';

const App = () => {
    return(
       <Container maxWidth="lg"> 
           <AppBar position="static" color="inherit">
               <Typography align="center" variant="h2">Memories</Typography>
               <img src={memories} alt="memories" height="200" />
           </AppBar>

           <Grow in>
               <Container>
                   <Grid container justify="space-between" alignItems="center" spacing={3}>
                       <Grid item xs={12} sm={7} >
                           <Form />
                       </Grid>
                       <Grid item xs={12} sm={4} >
                           <PostList />
                       </Grid>
                   </Grid>
               </Container>
           </Grow>
       </Container>
    );
}

export default App;