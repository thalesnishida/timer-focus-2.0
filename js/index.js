import Sound from "./sounds.js";
import {
  buttonMinutes,
  buttonSeconds,
  buttonPlay,
  buttonStop,
  buttonLess,
  buttonPlus,
  iconRainWhite,
  iconRainBlack,
  iconTreeWhite,
  iconTreeBlack,
  iconShopBlack,
  iconShopWhite,
  iconFireBlack,
  iconFireWhite,
  wrapperRain,
  wrapperShop,
  wrapperTree,
  wrapperFire
} from './elements.js';


let minutes = Number(buttonMinutes.textContent);
let timeOut;

const sound = Sound();

buttonPlay.onclick = () => {
  countDown()
}

buttonStop.onclick = () => {
  updateDisplay();
  pauseTimer();
  return
}

buttonPlus.onclick = () => {
  addFiveMinutes();
}

buttonLess.onclick = () => {
  removeFiveMinutes();
}

wrapperRain.onclick = () => {
  change(wrapperRain,iconRainWhite,iconRainBlack, sound.soundAudioRain);
  clear(wrapperTree,iconTreeWhite,iconTreeBlack);
  clear(wrapperFire,iconFireWhite,iconFireBlack);
  clear(wrapperShop,iconShopWhite,iconShopBlack);
  sound.pauseMusic(sound.soundAudioFire, sound.soundAudioShop, sound.soundAudioTree)

}

wrapperTree.onclick = () => {
  change(wrapperTree,iconTreeWhite,iconTreeBlack, sound.soundAudioTree);
  clear(wrapperRain,iconRainWhite,iconRainBlack);
  clear(wrapperFire,iconFireWhite,iconFireBlack);
  clear(wrapperShop,iconShopWhite,iconShopBlack);
  sound.pauseMusic(sound.soundAudioFire, sound.soundAudioShop, sound.soundAudioRain)
}

wrapperShop.onclick = () => {
  change(wrapperShop,iconShopWhite,iconShopBlack, sound.soundAudioShop);
  clear(wrapperTree,iconTreeWhite,iconTreeBlack);
  clear(wrapperRain,iconRainWhite,iconRainBlack);
  clear(wrapperFire,iconFireWhite,iconFireBlack);
  sound.pauseMusic(sound.soundAudioFire, sound.soundAudioRain, sound.soundAudioTree)

}

wrapperFire.onclick = () => {
  change(wrapperFire,iconFireWhite,iconFireBlack, sound.soundAudioFire); 
  clear(wrapperTree,iconTreeWhite,iconTreeBlack);
  clear(wrapperRain,iconRainWhite,iconRainBlack);
  clear(wrapperShop,iconShopWhite,iconShopBlack);
  sound.pauseMusic(sound.soundAudioRain, sound.soundAudioShop, sound.soundAudioTree)

}

function change(wrapper, iconWhite, iconBlack, music){
  wrapper.classList.toggle('back-icon');
  iconWhite.classList.toggle('hide');
  iconBlack.classList.toggle('hide');
  if(iconWhite.classList.contains('hide') == true){
    music.pause()
  } else {
    music.play()
  }
}

function clear(wrapper, iconWhite, iconBlack){
  wrapper.classList.remove('back-icon');
  iconBlack.classList.remove('hide');
  iconWhite.classList.add('hide');
}

function countDown() {
  
  timeOut = setTimeout(() => {
    let minutes = Number(buttonMinutes.textContent);
    let seconds = Number(buttonSeconds.textContent);
    let isFinishid = minutes <= 0 && seconds <= 0;
    
    if(isFinishid){
      updateDisplay()
      return
    }

    if(seconds <= 0){
      seconds = 60;
      --minutes
    }

    updateDisplay(minutes,String(seconds - 2));
  

    countDown()
  }, 1000)
}

function updateDisplay(newMinutes, seconds){
  newMinutes = newMinutes === undefined ? minutes : newMinutes;
  seconds = seconds === undefined ? 0 : seconds;

  buttonMinutes.textContent = String(newMinutes).padStart(2, "0");
  buttonSeconds.textContent = String(seconds).padStart(2, "0");

  return
}

function pauseTimer(){
  clearTimeout(timeOut)
}

function addFiveMinutes(){
  pauseTimer()
  minutes = minutes + 5;
  updateDisplay(minutes, 0)
}

function removeFiveMinutes(){
  
  if(minutes == 0 ){
    return
  }
  minutes = minutes - 5;
  updateDisplay(minutes, 0)
}