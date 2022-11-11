
export default function Events(
  {
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
    wrapperFire,
    control,
    clear,
    change,
    sound
  }
){
  

  buttonPlay.onclick = () => {
    control.countDown()
  }
  
  buttonStop.onclick = () => {
    control.updateDisplay();
    control.pauseTimer();
    return
  }
  
  buttonPlus.onclick = () => {
    control.addFiveMinutes();
  }
  
  buttonLess.onclick = () => {
    control.removeFiveMinutes();
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


}