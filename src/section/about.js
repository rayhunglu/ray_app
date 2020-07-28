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
const About = () => {
    const classes = useStyles();

    return (
        <div id="about" className={classes.root} >
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <h2>About...</h2>
                </Paper>
            </Grid>
        </div>
    )
}

export default About;