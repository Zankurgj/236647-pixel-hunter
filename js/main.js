import {generateScreen} from './util.js';
import introSreen from './screens/intro-screen.js';

const FIRST_SCREEN = introSreen;

generateScreen(FIRST_SCREEN);

document.addEventListener(`click`, (e) => {
  if (e.target.closest(`button.back`)) {
    generateScreen(FIRST_SCREEN);
  }
});
