## TypeScript Gameboy Emulator


###Blargg Test Suite Status:
####Cpu Instructions
* 01 Special ✔️
* 02 Interrupts ❌
  * Timer doesn't work, Failed #4
* 03 Op SP, HL ❌
  * Freezes
* 04 Op R, imm ✔️
* 05 Op RP ✔️
* 06 Ld R, R ✔️
* 07 JR, JP, Call, Ret, Rst ❌
  * Freezes
* 08 Misc Instructions ❌
  * Freezes / flashing screen
* 09 Op R, R ✔️
* 10 Bit Ops ✔️
* 11 Op A, (HL) ✔️