import React from 'react';
import {Toolbar, Typography, makeStyles, Button} from "@material-ui/core";



  const useStyles = makeStyles(theme => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up("md")]:{
            display: 'flex',
        }
       }
  }));

const BarSession = () => {
    const classes = useStyles();
    return (
        <div>
            <Toolbar>
                <Typography variant="H6">devs</Typography>
                <div className={classes.sectionDesktop}>
                   <Button>
                       login
                   </Button>
                </div>
            </Toolbar>
        </div>
    )
}

export default BarSession
