import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

//import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = () => {
    //const dispatch = useDispatch()
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media}></CardMedia>
            <div className={classes.overlay}>
                <Typography variant="h6">Post creator</Typography>
                <Typography variant="body2">Created time</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small"><MoreHorizIcon fontSize="default" /></Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">Post tags</Typography>
            </div>
            <Typography className={classes.title}>Post title</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">Post Message</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary"><ThumbUpAltIcon fontSize="small" /> Like </Button>
                <Button size="small" color="primary"><DeleteIcon fontSize="small" /> Delete </Button>
            </CardActions>
        </Card>
    )
}

export default Post
