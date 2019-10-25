import React from 'react';
import './App.css';
import ChatroomContainer from './components/ChatroomContainer'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  return (
    <div>
    <h1>Evelinas Chat App</h1>
    <Signup />
    <Login />
    <ChatroomContainer />
    </div>
  );
}

export default App;
