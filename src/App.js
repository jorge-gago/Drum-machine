
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [activePad, setPad] =  useState("")

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      playSound(event.key.toUpperCase())
    })
  }, [])


  const playSound = (id) => {
    try{
    const element = document.querySelector(`#${id}`)
    element.load()
    element.play()
    setPad(() => element.dataset.nombre)
    } catch(error) {
      console.log(`Error in playSound: ${error}`)
    } 
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          <span className="pads">
          {actions.map((pad) => {
            return (
              <div className="drum-pad" id="pad.audio" key={pad.audio} onClick={() => playSound(pad.letra)}>
                {pad.letra}
                <audio id={pad.letra} className="clip" src={pad.audio}data-nombre={pad.nombre}></audio>
              </ div>
            )
          })}
          </span>
          <span className="show-pads">{activePad}</span>
        </div>
      </div> 
    </div>
    
  );
}

export default App;


const actions = [
  { nombre:"Heater 1", letra: "Q", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
  { nombre:"Heater 2", letra: "W", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
  { nombre:"Heater 3", letra: "E", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
  { nombre:"Heater 4", letra: "A", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
  { nombre:"clap", letra: "S", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
  { nombre:"open-HH", letra: "D", audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
  { nombre:"kick-n-hat", letra: "Z", audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
  { nombre:"kick", letra: "X", audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
  { nombre:"close-HH", letra: "C", audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },
]

