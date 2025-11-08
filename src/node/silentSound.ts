import type { Sound } from "../interfaces/sound";

export class SilentSound implements Sound {
  enable() { }
  stop() { }
  reset() { }
  refresh() { }
  setTimer() { }
  setBuffer() { }
  setPitch() { }
  setVolume() { }
}
