import { RegisterCode } from "../../registers/register-code.enum";
import { Instruction } from "../instruction.model";
import { registers } from "../../registers/registers";

export const registerToRegisterInstructions: Instruction[] = [];

function getLoadRR2ByteDefinition(rCode: RegisterCode, rCode2: RegisterCode) {
  return (1 << 6) + (rCode << 3) + rCode2;
}

// ****************
// * Load A, R2
// ****************
registerToRegisterInstructions.push({
  command: 'LD A, A',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.A, RegisterCode.A),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.A = registers.A;
  }
});

registerToRegisterInstructions.push({
  command: 'LD A, B',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.A, RegisterCode.B),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.A = registers.B;
  }
});

registerToRegisterInstructions.push({
  command: 'LD A, C',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.A, RegisterCode.C),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.A = registers.C;
  }
});

registerToRegisterInstructions.push({
  command: 'LD A, D',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.A, RegisterCode.D),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.A = registers.D;
  }
});

registerToRegisterInstructions.push({
  command: 'LD A, E',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.A, RegisterCode.E),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.A = registers.E;
  }
});

registerToRegisterInstructions.push({
  command: 'LD A, H',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.A, RegisterCode.H),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.A = registers.H;
  }
});

registerToRegisterInstructions.push({
  command: 'LD A, L',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.A, RegisterCode.L),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.A = registers.L;
  }
});


// ****************
// * Load B, R2
// ****************
registerToRegisterInstructions.push({
  command: 'LD B, A',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.B, RegisterCode.A),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.B = registers.A;
  }
});

registerToRegisterInstructions.push({
  command: 'LD B, B',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.B, RegisterCode.B),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.B = registers.B;
  }
});

registerToRegisterInstructions.push({
  command: 'LD B, C',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.B, RegisterCode.C),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.B = registers.C;
  }
});

registerToRegisterInstructions.push({
  command: 'LD B, D',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.B, RegisterCode.D),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.B = registers.D;
  }
});

registerToRegisterInstructions.push({
  command: 'LD B, E',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.B, RegisterCode.E),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.B = registers.E;
  }
});

registerToRegisterInstructions.push({
  command: 'LD B, H',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.B, RegisterCode.H),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.B = registers.H;
  }
});

registerToRegisterInstructions.push({
  command: 'LD B, L',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.B, RegisterCode.L),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.B = registers.L;
  }
});


// ****************
// * Load C, R2
// ****************
registerToRegisterInstructions.push({
  command: 'LD C, A',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.C, RegisterCode.A),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.C = registers.A;
  }
});

registerToRegisterInstructions.push({
  command: 'LD C, B',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.C, RegisterCode.B),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.C = registers.B;
  }
});

registerToRegisterInstructions.push({
  command: 'LD C, C',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.C, RegisterCode.C),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.C = registers.C;
  }
});

registerToRegisterInstructions.push({
  command: 'LD C, D',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.C, RegisterCode.D),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.C = registers.D;
  }
});

registerToRegisterInstructions.push({
  command: 'LD C, E',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.C, RegisterCode.E),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.C = registers.E;
  }
});

registerToRegisterInstructions.push({
  command: 'LD C, H',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.C, RegisterCode.H),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.C = registers.H;
  }
});

registerToRegisterInstructions.push({
  command: 'LD C, L',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.C, RegisterCode.L),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.C = registers.L;
  }
});


// ****************
// * Load D, R2
// ****************
registerToRegisterInstructions.push({
  command: 'LD D, A',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.D, RegisterCode.A),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.D = registers.A;
  }
});

registerToRegisterInstructions.push({
  command: 'LD D, B',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.D, RegisterCode.B),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.D = registers.B;
  }
});

registerToRegisterInstructions.push({
  command: 'LD D, C',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.D, RegisterCode.C),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.D = registers.C;
  }
});

registerToRegisterInstructions.push({
  command: 'LD D, D',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.D, RegisterCode.D),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.D = registers.D;
  }
});

registerToRegisterInstructions.push({
  command: 'LD D, E',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.D, RegisterCode.E),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.D = registers.E;
  }
});

registerToRegisterInstructions.push({
  command: 'LD D, H',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.D, RegisterCode.H),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.D = registers.H;
  }
});

registerToRegisterInstructions.push({
  command: 'LD D, L',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.D, RegisterCode.L),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.D = registers.L;
  }
});


// ****************
// * Load E, R2
// ****************
registerToRegisterInstructions.push({
  command: 'LD E, A',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.E, RegisterCode.A),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.E = registers.A;
  }
});

registerToRegisterInstructions.push({
  command: 'LD E, B',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.E, RegisterCode.B),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.E = registers.B;
  }
});

registerToRegisterInstructions.push({
  command: 'LD E, C',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.E, RegisterCode.C),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.E = registers.C;
  }
});

registerToRegisterInstructions.push({
  command: 'LD E, D',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.E, RegisterCode.D),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.E = registers.D;
  }
});

registerToRegisterInstructions.push({
  command: 'LD E, E',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.E, RegisterCode.E),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.E = registers.E;
  }
});

registerToRegisterInstructions.push({
  command: 'LD E, H',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.E, RegisterCode.H),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.E = registers.H;
  }
});

registerToRegisterInstructions.push({
  command: 'LD E, L',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.E, RegisterCode.L),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.E = registers.L;
  }
});


// ****************
// * Load H, R2
// ****************
registerToRegisterInstructions.push({
  command: 'LD H, A',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.H, RegisterCode.A),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.H = registers.A;
  }
});

registerToRegisterInstructions.push({
  command: 'LD H, B',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.H, RegisterCode.B),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.H = registers.B;
  }
});

registerToRegisterInstructions.push({
  command: 'LD H, C',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.H, RegisterCode.C),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.H = registers.C;
  }
});

registerToRegisterInstructions.push({
  command: 'LD H, D',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.H, RegisterCode.D),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.H = registers.D;
  }
});

registerToRegisterInstructions.push({
  command: 'LD H, E',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.H, RegisterCode.E),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.H = registers.E;
  }
});

registerToRegisterInstructions.push({
  command: 'LD H, H',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.H, RegisterCode.H),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.H = registers.H;
  }
});

registerToRegisterInstructions.push({
  command: 'LD H, L',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.H, RegisterCode.L),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.H = registers.L;
  }
});


// ****************
// * Load L, R2
// ****************
registerToRegisterInstructions.push({
  command: 'LD L, A',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.L, RegisterCode.A),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.L = registers.A;
  }
});

registerToRegisterInstructions.push({
  command: 'LD L, B',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.L, RegisterCode.B),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.L = registers.B;
  }
});

registerToRegisterInstructions.push({
  command: 'LD L, C',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.L, RegisterCode.C),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.L = registers.C;
  }
});

registerToRegisterInstructions.push({
  command: 'LD L, D',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.L, RegisterCode.D),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.L = registers.D;
  }
});

registerToRegisterInstructions.push({
  command: 'LD L, E',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.L, RegisterCode.E),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.L = registers.E;
  }
});

registerToRegisterInstructions.push({
  command: 'LD L, H',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.L, RegisterCode.H),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.L = registers.H;
  }
});

registerToRegisterInstructions.push({
  command: 'LD L, L',
  byteDefinition: getLoadRR2ByteDefinition(RegisterCode.L, RegisterCode.L),
  cycleTime: 1,
  byteLength: 1,
  operation() {
    registers.L = registers.L;
  }
});

// ****************
// * Load SP, HL
// ****************
registerToRegisterInstructions.push({
  command: 'LD SP, HL',
  byteDefinition: 0b11111001,
  cycleTime: 2,
  byteLength: 1,
  operation() {
    registers.SP = registers.HL;
  }
});
