import { EmulatorCanvas } from './components/EmulatorCanvas/EmulatorCanvas'

function App() {
  return (
    <div className="max-w-3xl mx-auto p-8 text-center">
      <h1 className="mb-8">CHIP-8 Emulator</h1>
      <EmulatorCanvas />
    </div>
  )
}

export default App
