import { useState } from 'react'

export function useROMLoader(onLoad: (rom: Uint8Array) => void) {
  const [fileName, setFileName] = useState<string>('')

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const arrayBuffer = await file.arrayBuffer()
      const rom = new Uint8Array(arrayBuffer)
      setFileName(file.name)
      onLoad(rom)
    }
  }

  return {
    fileName,
    handleFileUpload,
  }
}
