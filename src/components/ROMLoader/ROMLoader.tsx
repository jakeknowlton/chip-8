interface ROMLoaderProps {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  fileName?: string
}

export function ROMLoader({ onFileChange, fileName }: ROMLoaderProps) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <label
        htmlFor="file"
        className="rounded-lg border border-transparent px-5 py-2.5 text-base font-medium bg-indigo-600 cursor-pointer transition-colors hover:bg-indigo-700 focus-within:outline focus-within:outline-2 focus-within:outline-indigo-500"
      >
        Choose ROM File
        <input
          type="file"
          id="file"
          onChange={onFileChange}
          accept=".ch8"
          className="hidden"
        />
      </label>
      {fileName && (
        <span className="text-sm text-gray-400">
          Loaded: <span className="text-white">{fileName}</span>
        </span>
      )}
    </div>
  )
}
