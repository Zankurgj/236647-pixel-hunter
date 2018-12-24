import {generateScreen, addScreenElement} from '../util.js';
import greetingScreen from './greeting-screen.js';

const templateScreen = `
<section class="intro">
  <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
    Sparnaay.</p>
</section>`;

const screenElement = addScreenElement(templateScreen);

const agreeButton = screenElement.querySelector(`.intro__asterisk`);

agreeButton.addEventListener(`click`, () => {
  generateScreen(greetingScreen);
});

export default screenElement;
