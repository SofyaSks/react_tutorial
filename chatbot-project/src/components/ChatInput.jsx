import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');


  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ]

    setChatMessages(newChatMessages);

    setInputText('');

    setChatMessages([
      ...newChatMessages,
      {
        message: <img src="loading-spinner.gif" className='spinner-img' />,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);

    const response = await Chatbot.getResponseAsync(inputText);


    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);


  }

  return (
    <div className='chat-input-container'>
      <input className='chat-input'
        placeholder='Send a message to Chatbot'
        size='30'
        onChange={saveInputText}
        onKeyDown={
          (event) => {
            if (event.key === 'Enter') {
              sendMessage();
            }
            else if (event.key === 'Escape') {
              setInputText('');
            }

          }
        }
        value={inputText} />


      <button onClick={sendMessage}
        className='send-button'
      >Send</button>
    </div>
  )
}