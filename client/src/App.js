import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import useStyles from './styles';
import captures from './images/captures.png';

function App() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Typography variant="h2" align="center" className={classes.heading}>Captures</Typography>
        <img src={captures} alt="captures" height="60" className={classes.image} />
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
