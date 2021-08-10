import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
    const classes = useStyles()
    return (
        <Grid container alignItems="stretch" spacing={3} className={classes.container}>
            <Grid item xs={12} sm={6} md={6}>
                <Post />
            </Grid>
        </Grid>
    )
}

export default Posts
