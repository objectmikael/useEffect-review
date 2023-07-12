import React from 'react'
import homescreen from '../assets/homescreen.jpg'

export default function Home({isSignedIn, name}) {
  return (
    <div className='home'>
      {
        (isSignedIn) ? (
          <>
            <h1> Welcome Back {name}</h1>
            <br />
            <h1> React Hooks </h1>
            <h3> useEffect </h3>
            <img src={homescreen} alt='unsplash useEffect' />         
          </>
        ) : <h3> Please Sign In to Continue</h3>
      }
    </div>
  )
}
