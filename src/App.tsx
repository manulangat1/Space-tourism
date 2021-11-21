import React from 'react';
import Menu from './assets/images/svgs/Menu.svg'
import Background from './assets/images/svgs/Background.svg'
import Dashboard from './Dashboard';
import useStyles from './components/Navbar/Navbar.styles';

function App() {
  const classes = useStyles({});
  return (
    <main className={classes.root} style={{height:"100vh"}} >
      <Dashboard />
    </main>
  );
}

export default App;
