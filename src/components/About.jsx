import React from 'react'

export default function About() {
  return (
    <div className='about'>
        <h1>About Page</h1>
        <p> <strong>useEffect</strong> hook is a built-in hook in React that allows us to perform side effects in functional components. We are now able to control the component lifecycle in React which consists of three main phases: mounting, updating, and unmounting. </p>
        <ul>
          <li>The mounting phase occurs when a component is being created and inserted into the DOM for the first time.</li>
          <li>The updating phase occurs when a component is re-rendered due to changes in props or state.</li>
          <li>The unmounting phase occurs when a component is removed from the DOM</li>
        </ul>
    </div>
  )
}
