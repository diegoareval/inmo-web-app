import React from 'react';
import {Toolbar, Typography, makeStyles, Button, IconButton} from "@material-ui/core";



  const useStyles = makeStyles(theme => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up("md")]:{
            display: 'flex',
        }
       },grow: {
           flexGrow: 1
       }, sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up("md")]:{
            display: 'none',
        }
       }
  }));

const BarSession = () => {
    const classes = useStyles();
    return (
        <div>
            <Toolbar>
            <IconButton color="inherit">
                      <i className="material-icons">menu</i>
                  </IconButton>
                <Typography variant="H6">devs</Typography>
                <div className={classes.grow}>

                </div>
                <div className={classes.sectionDesktop}>
                   <Button color="inherit">
                       login
                   </Button>
                </div>
                <div className={classes.sectionMobile}>
                  <IconButton color="inherit">
                      <i className="material-icons">more_vert</i>
                  </IconButton>
                </div>
            </Toolbar>
        </div>
    )
}

export default BarSession
