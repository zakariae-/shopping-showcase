import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const Hats = () => {
  return (
    <div>Hats</div>
  )
}

function App() {
  return (
    <div>
      <Switch>        
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
