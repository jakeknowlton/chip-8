import './ROMLoader.css'

interface ROMLoaderProps {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  fileName?: string
}

export function ROMLoader({ onFileChange, fileName }: ROMLoaderProps) {
  return (
    <div className="rom-loader">
      <label htmlFor="file">Load ROM:</label>
      <input type="file" id="file" onChange={onFileChange} accept=".ch8" />
      {fileName && <span className="file-name">{fileName}</span>}
    </div>
  )
}
