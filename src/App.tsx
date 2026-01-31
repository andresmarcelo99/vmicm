import { useState } from 'react'
import minionGif from './assets/minon.gif'
import './App.css'

const LastChanceArray = ["No","Are you sure?", "Are you sure sure?", "ok mañana 💜", "nigger", "Last chance"]

function App() {
  const [count, setCount] = useState(0)
  const [noClickCount, setNoClickCount] = useState(0)

  const handleNoClick = () => {
    if (count < LastChanceArray.length - 1) {
      setCount(count + 1)
      setNoClickCount(noClickCount + 1)
    }
  }

  // Calculate exponential growth for the Yes button (much more aggressive)
  const baseSize = Math.pow(1.5, noClickCount) // More aggressive growth, no cap
  const buttonPadding = `${1 + (baseSize - 1) * 0.8}rem ${2 + (baseSize - 1) * 1}rem`
  const buttonFontSize = `${1.4 + (baseSize - 1) * 0.6}rem`

  return (
      <>
        <div className="valentine-container">
          <img src={minionGif} className="gif" alt="Minion Gif" />
          <h2 className="question">Will you be my valentine?</h2>
          <div className="button-container">
            <button 
              className="yes-button"
              style={{
                padding: buttonPadding,
                fontSize: buttonFontSize,
                transition: 'all 0.3s ease-in-out'
              }}
            >
              Yes
            </button>
            <button className="no-button" onClick={handleNoClick}>
              {LastChanceArray[count]}
            </button>
          </div>
        </div>
      </>
    )
}

export default App
