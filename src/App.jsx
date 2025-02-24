import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react';
import AnaSayfa from './Components/AnaSayfa';
import './App.css';
import SiparisFormu from './Components/SiparisFormu';


function App() {

  return (
      <Router>
      <Switch>
        <Route path="/" exact >
          <AnaSayfa/>
        </Route>
        <Route path="/SiparisFormu" >
          <SiparisFormu/>
        </Route>
      </Switch>
      </Router>
  )
}

export default App
