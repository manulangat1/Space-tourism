
import { AppBar, Box, Button, Divider, Drawer, Grid, IconButton,Toolbar } from '@material-ui/core';
import { MenuBookSharp } from '@material-ui/icons';
import React, { useState } from 'react'
import Menu from '../../assets/images/svgs/Menu.svg'
import useStyles from './Navbar.styles';
const  Navbar = () => {
    const classes = useStyles({});
    // const classes = useStyles();
    const [open, setOpen] = useState(false);
    return (
        
        <AppBar position="sticky" style={{background:"transparent" , boxShadow:"none",height:"4rem"}}>
            <Toolbar className={classes.toolbar}>
                {/* <Container> */}
                <Grid container>
                    <Grid item xs={3} sm={4} >
                        <img src={Menu} alt="header "  />
                    </Grid>
                    <Grid item xs={9} sm={8}   > 
                        <div className={classes.Menus}>
                            <Button variant="text" style={{color:"white", marginRight:"3.2rem"}} >
                                Home
                            </Button>
                            <Button variant="text" style={{color:"white", marginRight:"3.2rem"}}>
                                Destination
                            </Button>
                            <Button variant="text" style={{color:"white", marginRight:"3.2rem"}}>
                                Crew
                            </Button>
                            <Button variant="text" style={{color:"white", marginRight:"3.2rem"}}>
                                Technology
                            </Button>
                            </div>
                        <div className="smNav">
                            {/* Now */}
                            <IconButton edge="end" style={{color:"white"}}>
                            {/* <MenuIcon /> */}
                                    <MenuBookSharp onClick={() => setOpen(!open)} style={{color:"white"}} />
                            </IconButton>
                            <Drawer 
                            open={open}
                            variant="temporary"
                            anchor="right"
                            onClose={() => setOpen(!open)}
                            // onOpen={() => setOpen(!open)}
                            >
                                <Box
                                    style={{
                                        backgroundColor:"#555555",
                                        // height:"2",
                                        paddingTop:"7rem"
                                    }}>
                                    <Divider />
                                    <Button variant="text" style={{color:"white", marginRight:"3.2rem"}} >
                                        Home
                                    </Button>
                                    <Divider />
                                    <Button variant="text" style={{color:"white", marginRight:"3.2rem"}}>
                                        Destination
                                    </Button>
                                    <Divider />
                                    <Button variant="text" style={{color:"white", marginRight:"3.2rem"}}>
                                        Crew
                                    </Button>
                                    <Divider />
                                    <Button variant="text" style={{color:"white", marginRight:"3.2rem"}}>
                                        Technology
                                    </Button>
                                </Box>
                            </Drawer>
                        </div>
                    </Grid>
            
                </Grid>                
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
