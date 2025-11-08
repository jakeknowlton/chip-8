import type { RunnableEmulator } from "../../core/interfaces/runnableEmulator";

import { Emulator } from "../../core/emulator";
import { IntervalTimer } from "../../utils/timeoutTimer";
import { BrowserKeyboard } from "./browserKeyboard";
import { AudioWorkletSound } from "./audioWorkletSound";
import { CanvasDisplay } from "./canvasDisplay";
import { WebLogger } from "./webLogger";
import { LogLevel } from "../../core/abstract/logger";

export class WebEmulator implements RunnableEmulator {
  emulator: Emulator;

  constructor(canvas: HTMLCanvasElement) {
    this.emulator = new Emulator(
      new CanvasDisplay(canvas),
      new IntervalTimer(),
      new BrowserKeyboard(),
      new AudioWorkletSound(),
      new WebLogger(LogLevel.OFF)
    );
  };

  setLogLevel(level: LogLevel) {
    this.emulator.setLogLevel(level);
  }

  load(rom: Uint8Array): void {
    this.emulator.load(rom);
  }

  setEmulationSpeed(ticksPerSecond: number) {
    this.emulator.setEmulationSpeed(ticksPerSecond);
  }

  setSoundFrequency(freqHz: number) {
    this.emulator.setSoundFrequency(freqHz);
  }

  setSoundVolume(volume: number) {
    this.emulator.setSoundVolume(volume);
  }

  reset(): void {
    this.emulator.reset();
  }

  start(): void {
    this.emulator.start();
  }

  pause(): void {
    this.emulator.pause();
  }

  continue(): void {
    this.emulator.continue();
  }
}
