import "../../gameboy-button/gameboy-button";
import "../../gameboy-d-pad/gameboy-d-pad";
import "../../gameboy-speaker/gameboy-speaker";
import "../../gameboy-top-menu/gameboy-top-menu";
import "../../gameboy-screen/gameboy-screen";
import { gameboy } from "../../gameboy-instance";
import { GameboySpeaker } from "../../gameboy-speaker/gameboy-speaker";
import localforage from "localforage";

let scaledDrawCanvas: any;

window.addEventListener('load', () => {
  const screenElement = document.querySelector('gameboy-screen')! as any;

  document.querySelector('.start-button')!.addEventListener('touchstart', () => gameboy.input.isPressingStart = true);
  document.querySelector('.start-button')!.addEventListener('touchend', () => gameboy.input.isPressingStart = false);

  document.querySelector('.select-button')!.addEventListener('touchstart', () => gameboy.input.isPressingSelect = true);
  document.querySelector('.select-button')!.addEventListener('touchend', () => gameboy.input.isPressingSelect = false);

  document.querySelector('.a-button')!.addEventListener('touchstart', () => gameboy.input.isPressingA = true);
  document.querySelector('.a-button')!.addEventListener('touchend', () => gameboy.input.isPressingA = false);

  document.querySelector('.b-button')!.addEventListener('touchstart', () => gameboy.input.isPressingB = true);
  document.querySelector('.b-button')!.addEventListener('touchend', () => gameboy.input.isPressingB = false);

  document.querySelector('gameboy-d-pad')!.addEventListener('touchend', () => {
    gameboy.input.isPressingUp = false;
    gameboy.input.isPressingLeft = false;
    gameboy.input.isPressingRight = false;
    gameboy.input.isPressingDown = false;
  });

  document.querySelector('gameboy-d-pad')!.addEventListener('directionchange', (event: any) => {
    gameboy.input.isPressingUp = false;
    gameboy.input.isPressingLeft = false;
    gameboy.input.isPressingRight = false;
    gameboy.input.isPressingDown = false;

    switch(event.detail.direction) {
      case '':
        break;
      case 'left':
        gameboy.input.isPressingLeft = true;
        break;
      case 'right':
        gameboy.input.isPressingRight = true;
        break;
      case 'up':
        gameboy.input.isPressingUp = true;
        break;
      case 'down':
        gameboy.input.isPressingDown = true;
        break;
      case 'up left':
        gameboy.input.isPressingUp = true;
        gameboy.input.isPressingLeft = true;
        break;
      case 'up right':
        gameboy.input.isPressingUp = true;
        gameboy.input.isPressingRight = true;
        break;
      case 'down left':
        gameboy.input.isPressingDown = true;
        gameboy.input.isPressingLeft = true;
        break;
      case 'down right':
        gameboy.input.isPressingDown = true;
        gameboy.input.isPressingRight = true;
        break;
    }
  });

  const gameboySpeaker = document.querySelector<GameboySpeaker>('gameboy-speaker')!;

  document.querySelector('gameboy-top-menu')!.addEventListener('fileloaded', async (event: any) => {
    gameboy.loadGame(event.detail.fileBuffer);
    gameboy.apu.enableSound();
    gameboySpeaker.onClick();

    const gameSram = await localforage.getItem<ArrayBuffer>(gameboy.cartridge!.title);

    if (gameSram) {
      gameboy.setCartridgeSaveRam(gameSram);
    }

    // Sync game data saves to SRam
    gameboy.setOnWriteToCartridgeRam(() => {
      localforage.setItem(gameboy.cartridge!.title, gameboy.getCartridgeSaveRam());
    });

    scaledDrawCanvas = screenElement.getCanvas();

    gameboy.onFrameFinished((imageData: ImageData) => {
      screenElement.renderingContext.putImageData(imageData, 0, 0);
    });

    gameboy.run();
  });

  gameboySpeaker.addEventListener('click', () => {
    if (gameboy.apu.isAudioEnabled) {
      gameboy.apu.disableSound();
    } else {
      gameboy.apu.enableSound();
    }
  })
});
