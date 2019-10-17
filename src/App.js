import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Index from './pages/Index';
import Room from './pages/Room';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/:roomId" component={Room} />
      </Switch>
    </Router>
  )
}

export default App;
