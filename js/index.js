import Sound from "./sounds.js";
import Control from "./controls.js";
import { clear, change } from './functions.js'
import Events from "./eventes.js";
import {
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
} from "./elements.js";

const control = Control();
const sound = Sound();

Events({
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
})

