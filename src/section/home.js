import React from 'react';
import { makeStyles, Grid, Paper } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minHeight: 300,
    },
}))
const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Grid item xs={12} ys={2}>
                <Paper className={classes.paper}>
                    <h2>Home...</h2>
                </Paper>
            </Grid>
        </div>
    )
}

export default Home;
