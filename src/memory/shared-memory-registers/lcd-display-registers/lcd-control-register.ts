import { SingleByteMemoryRegister } from "@/memory/shared-memory-registers/memory-register";
import { memory } from "@/memory/memory";
import { getBit } from "@/helpers/binary-helpers";

class LcdControlRegister implements SingleByteMemoryRegister {
  offset = 0xff40;
  name = 'LCDC';

  private tileMapAddressRanges = [
    {
      start: 0x9800,
      end: 0x9bff
    },
    {
      start: 0x9c00,
      end: 0x9fff,
    }
  ];

  private characterDataAddressRanges = [
    {
      start: 0x8800,
      end: 0x97ff
    },
    {
      start: 0x8000,
      end: 0x8fff,
    }
  ];

  get value() {
    return memory.readByte(this.offset);
  }

  set value(byte: number) {
    memory.writeByte(this.offset, byte);
  }

  get isBackgroundDisplayOn() {
    return getBit(this.value, 0) === 1;
  }

  get isObjOn() {
    return getBit(this.value, 1) === 1;
  }

  get objectHeight() {
    const objectBlockCompositionFlag = getBit(this.value, 2)
    return objectBlockCompositionFlag === 0 ? 8 : 16;
  }

  get backgroundCodeArea(): number {
    return getBit(this.value, 3);
  }

  get backgroundCharacterData() {
    return getBit(this.value, 4);
  }

  get windowCharacterData() {
    return this.backgroundCharacterData;
  }

  get isWindowingOn() {
    return getBit(this.value, 5) === 1;
  }

  get windowCodeArea() {
    return getBit(this.value, 6);
  }

  get windowTileMapAddressRange() {
    return this.tileMapAddressRanges[this.windowCodeArea];
  }

  get backgroundTileMapAddressRange() {
    return this.tileMapAddressRanges[this.backgroundCodeArea];
  }

  get backgroundCharacterDataAddressRange() {
    return this.characterDataAddressRanges[this.backgroundCharacterData];
  }

  get windowCharacterDataAddressRange() {
    return this.backgroundCharacterDataAddressRange;
  }

  get isLCDControllerOperating() {
    return getBit(this.value, 7) === 1;
  }
}

export const lcdControlRegister = new LcdControlRegister();
