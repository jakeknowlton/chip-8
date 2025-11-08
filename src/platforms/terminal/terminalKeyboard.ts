import { Terminal } from "terminal-kit";
import { Keyboard } from "../../core/abstract/keyboard.js";

export class TerminalKeyboard extends Keyboard {
  terminal: Terminal
  private pendingKeys: Set<number> = new Set()

  constructor(terminal: Terminal) {
    super();

    this.terminal = terminal;
    this.terminal.grabInput(true);

    this.terminal.on("key", (name: string) => {
      if (name === "CTRL_C" || name === "ESCAPE") {
        this.cleanup();
        this.terminal.processExit(0);
      }

      if (name in this.keyMap) {
        const chipKey = this.keyMap[name];

        this.pendingKeys.add(chipKey);
        this.pressedKeys[chipKey] = true;

        if (this.waiting) {
          this.waitingKey = chipKey;
          this.waiting = false;
        }
      }
    });

    // Clear keys after each emulator frame
    setInterval(() => {
      for (let i = 0; i < 16; i++) {
        if (!this.pendingKeys.has(i)) {
          this.pressedKeys[i] = false;
        }
      }
      this.pendingKeys.clear();
    }, 1000 / 60);
  }

  private cleanup() {
    this.terminal.grabInput(false);
    this.terminal.hideCursor(false);
  }
}
