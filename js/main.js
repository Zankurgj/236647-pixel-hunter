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

let currentScreenNumber = 0;
const changeScreen = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  currentScreenNumber = index;
  selectSlide(screens[currentScreenNumber]);
};

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case KeyCode.RIGHT_ARROW:
      changeScreen(currentScreenNumber + 1);
      break;
    case KeyCode.LEFT_ARROW:
      changeScreen(currentScreenNumber - 1);
      break;
  }
});
changeScreen(FIRST_SCREEN);

const arrowsWrapper = document.createElement(`div`);
arrowsWrapper.className = `arrows__wrap`;
arrowsWrapper.innerHTML = `
<style>
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
  </style>
  <button class="arrows__btn" leftControlArrow><-</button>
  <button class="arrows__btn" rightControlArrow>-></button>
`;

document.body.appendChild(arrowsWrapper);

const controlArrows = document.getElementsByClassName(`arrows__btn`);

Array.from(controlArrows).forEach((el) => {
  if (el.hasAttribute(`leftControlArrow`)) {
    el.addEventListener(`click`, () => {
      changeScreen(currentScreenNumber - 1);
    });
  }
  if (el.hasAttribute(`rightControlArrow`)) {
    el.addEventListener(`click`, () => {
      changeScreen(currentScreenNumber + 1);
    });
  }
});

