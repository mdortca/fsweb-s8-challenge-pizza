import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react';
import AnaSayfa from './Components/AnaSayfa';
import './App.css';
import SiparisFormu from './Components/SiparisFormu';
import SiparisOnayi from './Components/SiparisOnayi';


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
        <Route path="/SiparisOnayi">
          <SiparisOnayi />
        </Route>
      </Switch>
      </Router>
  )
}

export default App
