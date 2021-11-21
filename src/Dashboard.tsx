import React from 'react'
import Home from './components/Navbar/Home/Home';
import Navbar from './components/Navbar/Navbar'
import useStyles from './components/Navbar/Navbar.styles'

const  Dashboard = () => {
    const classes = useStyles({});
    return (
        <main className={classes.root}>
            <Navbar />
            <div style={{paddingTop:"6rem"}}>
                {/* <Home />  */}
                man
            </div>
            {/* <Home /> */}
        </main>
    )
}

export default Dashboard
