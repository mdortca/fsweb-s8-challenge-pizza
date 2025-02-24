import { useState } from 'react'
import AnaSayfa from './Components/AnaSayfa'
import './App.css'
import SiparisOnayi from './Components/SiparisOnayi';
import SiparisFormu from './Components/SiparisFormu';
import { BrowserRouter as Switch, Router, Route } from 'react-router-dom';

function App() {

  return (
<div>
    <Switch>
      <Route path="/" >
        <AnaSayfa />
      </Route>
    </Switch>
    </div>
  )
}

export default App
