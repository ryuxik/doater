import React from 'react';
import './App.css';
import Navbar from './Navbar';
import MusicPlayer from './MusicPlayer';

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <MusicPlayer></MusicPlayer>
    </div> 
  );
}

export default App;
