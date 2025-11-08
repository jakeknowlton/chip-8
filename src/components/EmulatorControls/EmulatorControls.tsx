interface EmulatorControlsProps {
  onStart: () => void
  onPause: () => void
  onContinue: () => void
  onReset: () => void
}

export function EmulatorControls({ onStart, onPause, onContinue, onReset }: EmulatorControlsProps) {
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      <button
        onClick={onStart}
        className="rounded-lg border border-transparent px-5 py-2.5 text-base font-medium bg-zinc-900 cursor-pointer transition-colors hover:border-indigo-500 focus:outline-indigo-500 dark:bg-zinc-900 light:bg-gray-50"
      >
        Start
      </button>
      <button
        onClick={onPause}
        className="rounded-lg border border-transparent px-5 py-2.5 text-base font-medium bg-zinc-900 cursor-pointer transition-colors hover:border-indigo-500 focus:outline-indigo-500 dark:bg-zinc-900 light:bg-gray-50"
      >
        Pause
      </button>
      <button
        onClick={onContinue}
        className="rounded-lg border border-transparent px-5 py-2.5 text-base font-medium bg-zinc-900 cursor-pointer transition-colors hover:border-indigo-500 focus:outline-indigo-500 dark:bg-zinc-900 light:bg-gray-50"
      >
        Continue
      </button>
      <button
        onClick={onReset}
        className="rounded-lg border border-transparent px-5 py-2.5 text-base font-medium bg-zinc-900 cursor-pointer transition-colors hover:border-indigo-500 focus:outline-indigo-500 dark:bg-zinc-900 light:bg-gray-50"
      >
        Reset
      </button>
    </div>
  )
}
