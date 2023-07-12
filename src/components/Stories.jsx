import React, {useState} from 'react'
import InstagramPost from './InstagramPost'
import Notification from './Notification'

export default function Stories() {

  const [showNotification, setShowNotification] = useState(false)

  return (
    <div>

        <div>
          <Notification showNotification={showNotification} setShowNotification={setShowNotification}/>
        </div>

        <InstagramPost setShowNotification={setShowNotification} />
    
    </div>
  )
}
