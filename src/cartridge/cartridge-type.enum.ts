export enum CartridgeType {
  ROM,
  MBC1,
  MBC1_RAM,
  MBC1_RAM_BATTERY,
  MBC2 = 5,
  MBSC2_BATTERY,
  ROM_RAM = 8,
  ROM_RAM_BATTERY,
  MMM01 = 0xb,
  MMM01_RAM,
  MMM01_RAM_BATTERY,
  MBC3_TIMER_BATTERY = 0xf,
  MBC3_TIMER_RAM_BATTERY,
  MBC3,
  MBC3_RAM,
  MBC3_RAM_BATTERY,
  MBC5 = 0x19,
  MBC5_RAM = 0x1a,
  MBC5_RAM_BATTERY,
  MBC5_RUMBLE,
  MBC5_RUMBLE_RAM,
  MBC5_RUMBLE_RAM_BATTERY,
  MBC6 = 0x20,
  MBC7_SENSOR_RUMBLE_RAM_BATTERY = 0x22,
  POCKET_CAMERA = 0xfc,
  BANDAI_TAMA5,
  HuC3,
  HuC1_RAM_BATTERY
}