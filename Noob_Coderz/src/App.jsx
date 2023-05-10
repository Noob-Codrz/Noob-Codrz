import React from 'react'
import './App.css'
import About from './Components/About/About'
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

export default function App() {
  return (
    <div>
      <About/>
    </div>

  )
}
