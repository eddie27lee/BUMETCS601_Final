import './App.css';
import './styles.css';
import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home, Altran, Apple, Ibm, Merative} from './components'

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='' element={<Home></Home>}/>

            <Route path='/altran' element={ <Altran/>} />
            <Route path='/apple' element={ <Apple/>} />
            <Route path='/ibm' element={ <Ibm/>} />
            <Route path='/merative' element={ <Merative/>} />
          </Routes>
        </BrowserRouter>

      </div>
  );
}

export default App;
