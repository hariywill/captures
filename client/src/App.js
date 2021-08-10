import React, { Component } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import captures from './images/captures.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';


function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Captures</Typography>
        <img src={captures} alt="captures" height="60" />
      </AppBar>
      <Grow in>
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts></Posts>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form></Form>
          </Grid>
        </Grid>
      </Grow>
    </Container>
  )
}

export default App;
