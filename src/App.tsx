import { EmulatorCanvas } from './components/EmulatorCanvas/EmulatorCanvas'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>CHIP-8 Emulator</h1>
      <EmulatorCanvas />
    </div>
  )
}

export default App
