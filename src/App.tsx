import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import APOD from './components/APOD/APOD';
import Calendar from './components/Calendar/Calendar';
import Home from './components/Home/Home';
import Header from './components/Navigation/Header/Header';

function App() {
  return (
    <>
      <Header></Header>
      <div style={{maxHeight: '90vh', maxWidth: '100vw', overflow: 'auto', backgroundColor: 'rgba(0,0,0,0.0125)'}} >
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/calendar' exact component={Calendar} />
          <Route path='/about' exact component={About} />
          <Route path='/apod' exact component={APOD} />
          <Route path='/'>
            <Redirect to='/home' />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
