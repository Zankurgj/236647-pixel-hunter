'use strict';

const KeyCode = {
  RIGHT_ARROW: 39,
  LEFT_ARROW: 37
};
const FIRST_SCREEN = 0;
const mainElement = document.querySelector(`#main`);

const selectSlide = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element.cloneNode(true));
};

const screens = Array.from(document.querySelectorAll(`template`)).
  map((it) => it.content);

let currentScreen = 0;
const changeScreen = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  currentScreen = index;
  selectSlide(screens[currentScreen]);
};

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case KeyCode.RIGHT_ARROW:
      changeScreen(currentScreen + 1);
      break;
    case KeyCode.LEFT_ARROW:
      changeScreen(currentScreen - 1);
      break;
  }
});
changeScreen(FIRST_SCREEN);

const wrapper = document.createElement(`div`);
wrapper.className = `arrows__wrap`;
wrapper.innerHTML = `<style>
.arrows__wrap {
  position: absolute;
  top: 95px;
  left: 50%;
  margin-left: -56px;
}
.arrows__btn {
  background: none;
  border: 2px solid black;
  padding: 5px 20px;
}
</style>`;
const buttonLeft = document.createElement(`button`);
buttonLeft.innerHTML = `<-`;
buttonLeft.className = `arrows__btn`;
buttonLeft.addEventListener(`click`, () => {
  changeScreen(currentScreen - 1);
});
const buttonRight = buttonLeft.cloneNode(true);
buttonRight.innerHTML = `->`;
buttonRight.addEventListener(`click`, () => {
  changeScreen(currentScreen + 1);
});
document.body.appendChild(wrapper);
wrapper.appendChild(buttonLeft);
buttonLeft.parentNode.insertBefore(buttonRight, buttonLeft.nextSibling);
