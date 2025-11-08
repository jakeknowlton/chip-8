import type { RunnableEmulator } from "../../core/interfaces/runnableEmulator.js";
import terminalKit from "terminal-kit";

import { Emulator } from "../../core/emulator.js";
import { IntervalTimer } from "../../utils/timeoutTimer.js";
import { TerminalKeyboard } from "./terminalKeyboard.js";
import { TerminalDisplay } from "./terminalDisplay.js";
import { SilentSound } from "./silentSound.js";
import { NodeLogger } from "./nodeLogger.js";
import { LogLevel } from "../../core/abstract/logger.js";

export class TerminalEmulator implements RunnableEmulator {
  emulator: Emulator;

  constructor() {
    const logger = new NodeLogger();
    logger.enableConsoleLogging(false);
    logger.setLevel(LogLevel.OFF);
    logger.enableFileLogging(false, "./log.txt");

    const term = terminalKit.createTerminal();

    this.emulator = new Emulator(
      new TerminalDisplay(term),
      new IntervalTimer(),
      new TerminalKeyboard(term),
      new SilentSound(),
      logger
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
