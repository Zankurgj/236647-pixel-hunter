'use strict';

const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;

const mainElement = document.querySelector(`#main`);

const selectSlide = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element.cloneNode(true));
};

const screens = Array.from(document.querySelectorAll(`template`)).
  map((it) => it.content);

let current = 0;
const select = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  current = index;
  selectSlide(screens[current]);
};

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      select(current + 1);
      break;
    case LEFT_ARROW:
      select(current - 1);
      break;
  }
});
select(0);

const wrapper = document.createElement(`div`);
wrapper.className = `arrows__wrap`;
const buttonLeft = document.createElement(`button`);
buttonLeft.innerHTML = `<-`;
buttonLeft.className = `arrows__btn`;
buttonLeft.onclick = function () {
  select(current + 1);
};
const buttonRight = buttonLeft.cloneNode(true);
buttonRight.innerHTML = `->`;
buttonRight.onclick = function () {
  select(current - 1);
};


document.body.appendChild(wrapper);
wrapper.appendChild(buttonLeft);
buttonLeft.parentNode.insertBefore(buttonRight, buttonLeft.nextSibling);

const css =
  `.arrows__wrap {
    position: absolute;
    top: 95px;
    left: 50%;
    margin-left: -56px;
  }
  .arrows__btn {
    background: none;
    border: 2px solid black;
    padding: 5px 20px;
  }`
  ;
const style = document.createElement(`style`);
style.type = `text/css`;

if (style.styleSheet) {
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

wrapper.insertBefore(style, wrapper.firstChild);

