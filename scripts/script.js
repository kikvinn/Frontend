import {renderCards} from "./cards.js";
import "./form.js";
import {preloader} from"./preloader.js"
import "./swipper.js"
import "./swipper-lib.js"

document.addEventListener('DOMContentLoaded', renderCards('.news__list'));
preloader()