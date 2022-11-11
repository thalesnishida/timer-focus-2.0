export default function () {
  const soundAudioTree = new Audio ('./assets/forest.wav');
  const soundAudioRain = new Audio ('./assets/rain.wav');
  const soundAudioFire = new Audio ('./assets/fireplace.wav');
  const soundAudioShop = new Audio ('./assets/coffee-shop.wav');
 

  function pauseMusic(a1, a2, a3){
    a1.pause();
    a2.pause();
    a3.pause();
  }

  return {
    soundAudioTree,
    soundAudioRain,
    soundAudioFire,
    soundAudioShop,
    pauseMusic
  }
}