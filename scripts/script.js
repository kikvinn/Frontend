import {renderCards} from "./cards.js";
import "./form.js";
import {preloader} from"./preloader.js"
import {swiper} from "./swipper.js"

document.addEventListener('DOMContentLoaded', () => {
  preloader();
  renderCards('.news__list');
  swiper; // Просто убедитесь что экземпляр создан
});