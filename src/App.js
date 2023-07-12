import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import './App.css';
import Stories from './components/Stories';
import Home from './components/Home';
import Nav from './components/Nav';
import { useState } from 'react';

function App() {

  const [isSignedIn, setIsSignedIn] = useState(false)
  const [name, setName] = useState('')

  return (
    <div className="App">
      <Nav isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} setName={setName}/>

      <Routes>
        {
          (isSignedIn) ? (
            <>
              <Route path='/home' element={<Home name={name} isSignedIn={isSignedIn} />} />
              <Route path='/stories' element={<Stories />} />
              <Route path='/about' element={<About />} />           
            </>
          ) : <Route path='/home' element={<Home name={name} isSignedIn={isSignedIn} />} />
        }
      </Routes>
      
    </div>
  );
}

export default App;
