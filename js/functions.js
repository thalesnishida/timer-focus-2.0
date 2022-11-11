
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

export {
  change,
  clear
}