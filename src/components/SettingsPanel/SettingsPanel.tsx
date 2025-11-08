import { useState } from 'react'

interface SettingsPanelProps {
  onSpeedChange: (speed: number) => void
  onFrequencyChange: (frequency: number) => void
  onVolumeChange: (volume: number) => void
  initialSpeed?: number
  initialFrequency?: number
  initialVolume?: number
}

export function SettingsPanel({
  onSpeedChange,
  onFrequencyChange,
  onVolumeChange,
  initialSpeed = 30,
  initialFrequency = 440,
  initialVolume = 0.25,
}: SettingsPanelProps) {
  const [speed, setSpeed] = useState(initialSpeed)
  const [frequency, setFrequency] = useState(initialFrequency)
  const [volume, setVolume] = useState(initialVolume)

  const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSpeed = Number(event.target.value)
    setSpeed(newSpeed)
    onSpeedChange(newSpeed)
  }

  const handleFrequencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFrequency = Number(event.target.value)
    setFrequency(newFrequency)
    onFrequencyChange(newFrequency)
  }

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value)
    setVolume(newVolume)
    onVolumeChange(newVolume)
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <div className="flex flex-col gap-2">
        <label htmlFor="speed" className="font-medium">Emulation speed: {speed}</label>
        <input
          type="range"
          min="5"
          max="1000"
          value={speed}
          step="5"
          id="speed"
          onChange={handleSpeedChange}
          className="w-full"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="frequency" className="font-medium">Sound frequency: {frequency} Hz</label>
        <input
          type="range"
          min="40"
          max="1000"
          value={frequency}
          step="20"
          id="frequency"
          onChange={handleFrequencyChange}
          className="w-full"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="volume" className="font-medium">Sound volume: {volume.toFixed(2)}</label>
        <input
          type="range"
          min="0"
          max="1"
          value={volume}
          step="0.01"
          id="volume"
          onChange={handleVolumeChange}
          className="w-full"
        />
      </div>
    </div>
  )
}
