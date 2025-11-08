import './EmulatorControls.css'

interface EmulatorControlsProps {
  onStart: () => void
  onPause: () => void
  onContinue: () => void
  onReset: () => void
}

export function EmulatorControls({ onStart, onPause, onContinue, onReset }: EmulatorControlsProps) {
  return (
    <div className="emulator-controls">
      <button onClick={onStart}>Start</button>
      <button onClick={onPause}>Pause</button>
      <button onClick={onContinue}>Continue</button>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}
