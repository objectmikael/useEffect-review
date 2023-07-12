import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../assets/icon.ico'


export default function Nav({isSignedIn, setIsSignedIn, setName}) {

  const handleSignIn = (req, res) => {
    const name = prompt('What is your name')
    setName(name)
    setIsSignedIn(true)
  }

  const handleSignOut = () => {
    setIsSignedIn(false)
  }

  return (
    <div className='nav'>

        <img src={icon} alt="icon" />

        <div id='routes'>
          {
            (isSignedIn) ? ( 
              <>
                <Link to='/home'>Home</Link>
                <Link to='/stories'>Stories</Link>
                <Link to='/about'>About</Link>             
              </> 
            ) : <Link to='/home'>Home</Link>
          }
        </div>

        <div id='appState'>
            <button onClick={handleSignIn}> <p>Sign In</p> </button>
            <button onClick={handleSignOut}> <p>Sign Out</p> </button>
        </div>

    </div>
  )
}
