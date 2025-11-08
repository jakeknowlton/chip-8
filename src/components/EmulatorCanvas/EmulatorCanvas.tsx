import { useRef, useCallback } from 'react'
import { WebEmulator } from '../../platforms/web/webEmulator'
import { LogLevel } from '../../core/abstract/logger'
import { ROMLoader } from '../ROMLoader/ROMLoader'
import { EmulatorControls } from '../EmulatorControls/EmulatorControls'
import { SettingsPanel } from '../SettingsPanel/SettingsPanel'
import { useROMLoader } from '../../hooks/useROMLoader'

interface EmulatorCanvasProps {
  width?: number
  height?: number
}

export function EmulatorCanvas({ width = 512, height = 256 }: EmulatorCanvasProps) {
  const emulatorRef = useRef<WebEmulator | null>(null)

  const canvasRef = useCallback((canvas: HTMLCanvasElement | null) => {
    if (canvas && !emulatorRef.current) {
      emulatorRef.current = new WebEmulator(canvas)
      emulatorRef.current.setLogLevel(LogLevel.OFF)
    }
  }, [])

  const { fileName, handleFileUpload } = useROMLoader((rom) => {
    emulatorRef.current?.load(rom)
  })

  return (
    <div className="flex flex-col gap-6 items-center">
      <ROMLoader onFileChange={handleFileUpload} fileName={fileName} />

      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="border-2 border-indigo-500 bg-black"
        style={{ imageRendering: 'pixelated' }}
      />

      <EmulatorControls
        onStart={() => emulatorRef.current?.start()}
        onPause={() => emulatorRef.current?.pause()}
        onContinue={() => emulatorRef.current?.continue()}
        onReset={() => emulatorRef.current?.reset()}
      />

      <SettingsPanel
        onSpeedChange={(speed) => emulatorRef.current?.setEmulationSpeed(speed)}
        onFrequencyChange={(freq) => emulatorRef.current?.setSoundFrequency(freq)}
        onVolumeChange={(vol) => emulatorRef.current?.setSoundVolume(vol)}
      />
    </div>
  )
}
