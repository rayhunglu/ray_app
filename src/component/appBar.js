import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Navbar from 'react-bootstrap/Navbar'
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 10
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="sticky">
                <Toolbar className={classes.menuButton}>
                    <Typography variant="h6" className={classes.title}>
                        <Button id='home' color="inherit" className="page-scroll">Home</Button>
                    </Typography>
                    <Button color="inherit" href="#feature" className="page-scroll">Feature</Button>
                    <Button color="inherit" href="#about" className="page-scroll">About</Button>
                    <Button color="inherit" href="#experience" className="page-scroll">Experience</Button>
                    <Button color="inherit" href="#project" className="page-scroll">Project</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
