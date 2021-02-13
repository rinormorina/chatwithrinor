import './App.css';
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
const App = () =>{

if(!localStorage.getItem('username')) return <LoginForm></LoginForm>

  return (
    <ChatEngine
    height='100vh'
    projectID='b5eb87ad-0bbe-42ad-b247-2c61bce61922'
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed = {(chatAppProps)=><ChatFeed {...chatAppProps}/>}
    >


    </ChatEngine>
  )
}

export default App;
