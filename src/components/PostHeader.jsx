import React from 'react'
import icon from '../assets/icon.ico'

export default function PostHeader() {
  return (
    <div className='postHeader'>
        <div className='logo'>
            <img src={icon} alt='onboard logo'/>
        </div>
        <div className='postName'>
            <p> Review useEffect</p>
        </div>
    </div>
  )
}
