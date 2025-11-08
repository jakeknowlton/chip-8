import type { Sound } from "../../core/interfaces/sound";

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
