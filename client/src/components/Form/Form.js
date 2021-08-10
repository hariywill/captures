import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
//import { createPost, updatePost } from '../../actions/posts';

const Form = () => {
    const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''})

    const classes = useStyles()

    const clear = () => {
        setPostData({creator: '', title: '', message: '', tags: '', selectedFile: ''})
    }

    const handleSubmit = (e) => {
        e.preventDefault()


    }

    return (
        <Paper className={classes.paper}>
            <form onClick={handleSubmit} noValidate autoComplete="off" className={`${classes.root} ${classes.form}`}>
                <Typography variant="h6">Form</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={(base64) => {console.log(base64)}} />
                </div>
                <Button variant="contained" color="primary" size="large" type="submit" fullWidth className={classes.buttonSubmit}>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form
