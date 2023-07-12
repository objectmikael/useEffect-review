import React, {useState, useEffect} from 'react'
import InteractionBar from './InteractionBar'
import PostContent from './PostContent'
import PostHeader from './PostHeader'

export default function InstagramPost({ setShowNotification }) {
  // useState
  const [likesCount, setLikesCount] = useState(() => {
    const savedLikes = localStorage.getItem('likesCount')
    return savedLikes ? parseInt(savedLikes) : 0
  })
  const [heartColor, setHeartColor] = useState('black')

  // useEffect
  useEffect(() => {
      if(likesCount > 0) {
          setHeartColor('red')
      } else {
          setHeartColor('black')
      }
  }, [likesCount])
  
  useEffect(() => {
      return () => {
        localStorage.setItem('likesCount', likesCount.toString())
      }
  })


  // Handle Functions
  const handleLikes = () => {
      setLikesCount(likesCount + 1)
      handleNotification()
  }
  const handleNotification = () => {
      setShowNotification(true)
  }

  return (
    <div className='instagramPost'>
        <PostHeader />
        <PostContent />
        <InteractionBar likesCount={likesCount} setLikesCount={setLikesCount} heartColor={heartColor} handleLikes={handleLikes} />
    </div>
  )
}
