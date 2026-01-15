import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages';
import './App.css'
import { Chatbot } from 'supersimpledev';


function App() {
  

  const initialMessages = JSON.parse(localStorage.getItem('messages'))
  const [chatMessages, setChatMessages] = useState(initialMessages || []);

  useEffect(()=>{
    localStorage.setItem('messages', JSON.stringify(chatMessages))
  },[chatMessages])

  useEffect(()=>{
    Chatbot.addResponses({
      'hey': 'heeey cutie ;)',
      'wish me luck': 'good luck!'
    })
  })


  return (
    <div className='app-container'>
      {chatMessages.length === 0 &&
        (<p className='start-message'>Welcome to the chatbot project! Send a message to start</p>)}
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  )
}

export default App
