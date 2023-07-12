import React, { useState } from 'react'
import time from '../assets/timeSand.jpeg'
import camSil from '../assets/camelSilhouette.jpeg'
import camsSil from '../assets/camelsSilhouette.jpeg'
import entourage from '../assets/entourage.jpeg'

export default function PostContent() {

    const pics = [camSil, entourage, camsSil, time]
    const [idx, setIdx] = useState(0)

    const plusSlide = () => {
        if(idx <= pics.length - 2)
            setIdx(idx + 1)
    }
    const minusSlide = () => {
        if (idx > 0)
            setIdx(idx - 1)
    }

  return (
    <div className='postContent'>

        <img src={pics[idx]} alt="new egypt view" />
        
        <div className='navBtn'>
            <button className="prev" onClick={() => minusSlide(idx)}>&#10094;</button>
            <button className="next" onClick={() => plusSlide(idx)}>&#10095;</button>
        </div>
        
    </div>
  )
}
