import React from "react";
import './App.css';
import { Switch, Route } from 'react-router-dom';
import SortPage from './views/SortPage';
import FailPage from './views/FailPage';
import PassPage from './views/PassPage';
import Nav from './components/Nav';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <Nav />
        <Switch>
          <Route exact path='/' component={SortPage} />
          <Route path='/failed' component={FailPage} />
          <Route path='/passed' component={PassPage} />
        </Switch>
      </header>
    </div>
  );
}

export default App;