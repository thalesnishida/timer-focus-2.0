import { buttonMinutes, buttonSeconds} from './elements.js'

export default function Control() {
  

  let minutes = Number(buttonMinutes.textContent);
  let timeOut;

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
  
  return {
    countDown,
    updateDisplay,
    pauseTimer,
    addFiveMinutes,
    removeFiveMinutes
  }

}