import React from 'react'

export default function InteractionBar({likesCount, heartColor, handleLikes}) {
  return (
    <div className='interactionBar'>
        <button onClick={handleLikes} id='favorite' >
            <span className="material-symbols-outlined" id='heart' style={{color: heartColor}}>
                favorite
            </span>
        </button>

        <p> Likes: {likesCount} </p>

    </div>
  )
}
