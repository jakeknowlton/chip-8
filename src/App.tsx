import { useState, useRef, useEffect } from 'react'
import { WebEmulator } from './webEmulator'
import { LogLevel } from './abstract/logger'
import './App.css'

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const emulatorRef = useRef<WebEmulator | null>(null)
  const [speed, setSpeed] = useState(30)
  const [frequency, setFrequency] = useState(440)
  const [volume, setVolume] = useState(0.25)

  useEffect(() => {
    if (canvasRef.current && !emulatorRef.current) {
      emulatorRef.current = new WebEmulator(canvasRef.current)
      emulatorRef.current.setLogLevel(LogLevel.OFF)
    }
  }, [])

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && emulatorRef.current) {
      const arrayBuffer = await file.arrayBuffer()
      const rom = new Uint8Array(arrayBuffer)
      emulatorRef.current.load(rom)
    }
  }

  const handleStart = () => {
    emulatorRef.current?.start()
  }

  const handlePause = () => {
    emulatorRef.current?.pause()
  }

  const handleContinue = () => {
    emulatorRef.current?.continue()
  }

  const handleReset = () => {
    emulatorRef.current?.reset()
  }

  const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSpeed = Number(event.target.value)
    setSpeed(newSpeed)
    emulatorRef.current?.setEmulationSpeed(newSpeed)
  }

  const handleFrequencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFrequency = Number(event.target.value)
    setFrequency(newFrequency)
    emulatorRef.current?.setSoundFrequency(newFrequency)
  }

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value)
    setVolume(newVolume)
    emulatorRef.current?.setSoundVolume(newVolume)
  }

  return (
    <div className="app">
      <h1>CHIP-8 Emulator</h1>

      <div className="controls">
        <div className="file-input">
          <label htmlFor="file">Load ROM:</label>
          <input type="file" id="file" onChange={handleFileUpload} />
        </div>

        <canvas
          ref={canvasRef}
          width="512"
          height="256"
          id="canvas"
        />

        <div className="buttons">
          <button onClick={handleStart}>Start emulation</button>
          <button onClick={handlePause}>Pause emulation</button>
          <button onClick={handleContinue}>Continue emulation</button>
          <button onClick={handleReset}>Reset emulation</button>
        </div>

        <div className="slider">
          <label htmlFor="speed">Emulation speed: {speed}</label>
          <input
            type="range"
            min="5"
            max="1000"
            value={speed}
            step="5"
            id="speed"
            onChange={handleSpeedChange}
          />
        </div>

        <div className="slider">
          <label htmlFor="frequency">Sound frequency: {frequency} Hz</label>
          <input
            type="range"
            min="40"
            max="1000"
            value={frequency}
            step="20"
            id="frequency"
            onChange={handleFrequencyChange}
          />
        </div>

        <div className="slider">
          <label htmlFor="volume">Sound volume: {volume.toFixed(2)}</label>
          <input
            type="range"
            min="0"
            max="1"
            value={volume}
            step="0.01"
            id="volume"
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  )
}

export default App
