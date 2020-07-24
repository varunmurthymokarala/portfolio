import React from 'react';
import './App.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import {Route} from 'react-router-dom'
import Home from './components/index'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import ContactMe from './components/ContactMe'

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/portfolio" component={Home} />
      <Route path="/experience" component={Resume} />
      <Route path="/projects" component={Portfolio} />
      <Route path="/contact-me" component={ContactMe} />
    </>
  );
}

export default App;
