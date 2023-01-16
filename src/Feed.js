import React from 'react'
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from './MessageSender';
import Post from "./Post";


function Feed() {
  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />
        <Post 
          profilePic="https://media.licdn.com/dms/image/C4E03AQHsM-XDK8na8w/profile-displayphoto-shrink_200_200/0/1651658487357?e=1679529600&v=beta&t=Gqnj6htCCo93X0t9_YO_jOPcQkAo7hTUPRpsawT654I"
          message='Wow that works'
          timestamp='This is a timestamp'
          username='vlrfra'
          image='https://media.licdn.com/dms/image/C4E16AQF5LyOUZNyCsQ/profile-displaybackgroundimage-shrink_350_1400/0/1651658563610?e=1679529600&v=beta&t=mWZ4gTYgbZO9Y0_FMvXKjTiiFnVbhUDYhQhOqzyM92c'
          />

        <Post 
          profilePic="https://media.licdn.com/dms/image/C4E03AQHsM-XDK8na8w/profile-displayphoto-shrink_200_200/0/1651658487357?e=1679529600&v=beta&t=Gqnj6htCCo93X0t9_YO_jOPcQkAo7hTUPRpsawT654I"
          message='Wow that works'
          timestamp='This is a timestamp'
          username='Mellow'
          />

      
        {/* MessageSender */}
    </div>
  )
}

export default Feed