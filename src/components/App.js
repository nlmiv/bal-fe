import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Search from './Search';
import Flights from './Flights';

function App() {
  return (
    <Router>
      <div className="App">

      {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
       <Switch>
         <Route path="/search">
           <Search />
         </Route>
         <Route path="/flights">
           <Flights />
         </Route>
       </Switch>
      </div>
    </Router>
  );
}

export default App;
