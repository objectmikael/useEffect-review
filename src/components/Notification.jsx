import React, { useEffect } from 'react'

export default function Notification({showNotification, setShowNotification}) {


    useEffect (() => {
        if(showNotification){
            const timer = setTimeout(() => {
                setShowNotification(false)
            }, 3000)

            return () => {
                clearTimeout(timer)
            }
        }
    }, [showNotification, setShowNotification])


  return (
    <div className='notification'>
        {showNotification && <p>You have a new like</p>}
    </div>
  )
}
