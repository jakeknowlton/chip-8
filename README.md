# CHIP-8 Emulator

A CHIP-8 emulator written in TypeScript with support for SUPER-CHIP and XO-CHIP extensions. Run classic CHIP-8 programs in your browser or terminal.

## Quick Start

```bash
git clone https://github.com/jakeknow17/chip-8.git
cd chip-8
npm install
npm run dev        # Start web version
```

Visit `http://localhost:5173` and load a ROM file to start playing.

## Features

- **Complete instruction set** - Full CHIP-8, SUPER-CHIP, and XO-CHIP support
- **Web interface** - Modern React UI with canvas rendering
- **Terminal mode** - Text-based display for debugging
- **Configurable** - Adjustable emulation speed, sound frequency, and volume
- **Keyboard mapping** - Standard QWERTY layout

## Web vs Terminal

### Web Version (Recommended)
The web interface provides the best experience:
- Accurate keyboard input with proper key-up detection
- Smooth 60 FPS rendering
- Audio support with configurable frequency/volume
- File upload for ROM loading

Run with: `npm run dev`

### Terminal Version
A lightweight terminal-based display useful for debugging:
- Runs in any terminal emulator
- Text-based rendering using Unicode block characters
- Limited keyboard support (terminals lack key-up events)
- No audio

Run with: `npm run terminal`

## Controls

The CHIP-8 uses a 16-key hexadecimal keypad (0-F) mapped to your keyboard:

```
CHIP-8 Keypad       Keyboard
┌───┬───┬───┬───┐   ┌───┬───┬───┬───┐
│ 1 │ 2 │ 3 │ C │   │ 1 │ 2 │ 3 │ 4 │
├───┼───┼───┼───┤   ├───┼───┼───┼───┤
│ 4 │ 5 │ 6 │ D │   │ Q │ W │ E │ R │
├───┼───┼───┼───┤   ├───┼───┼───┼───┤
│ 7 │ 8 │ 9 │ E │   │ A │ S │ D │ F │
├───┼───┼───┼───┤   ├───┼───┼───┼───┤
│ A │ 0 │ B │ F │   │ Z │ X │ C │ V │
└───┴───┴───┴───┘   └───┴───┴───┴───┘
```

## Development

```bash
npm run dev             # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build
npm test                # Run tests
npm run terminal        # Build and run terminal version
npm run clean           # Clean build artifacts
```

## Technical References

### CHIP-8
The original CHIP-8 interpreter specification:
- [Cowgod's CHIP-8 Technical Reference](http://devernay.free.fr/hacks/chip8/C8TECH10.HTM)

### SUPER-CHIP
SUPER-CHIP 1.0/1.1 extensions (1991):
- High-resolution mode (128×64)
- Scrolling instructions
- 16×16 sprite support

### XO-CHIP
Modern XO-CHIP extensions (2014):
- [CHIP-8 Extensions Reference](https://chip-8.github.io/extensions/)
- 64KB memory support
- Dual display planes
- Audio pattern playback
- 16-bit addressing

## Architecture

The emulator is organized into platform-independent core logic and platform-specific implementations:

```
src/
├── core/              # Platform-agnostic emulator
├── platforms/
│   ├── web/          # Browser implementation
│   └── terminal/     # Terminal implementation
├── components/        # React UI components
└── hooks/            # Custom React hooks
```

## Credits

- CHIP-8 specification by Joseph Weisbecker (1977)
- SUPER-CHIP by Erik Bryntse (1991)
- XO-CHIP extensions by John Earnest (2014)
