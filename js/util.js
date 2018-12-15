// пытаюсь сделать кнопку "назад"
// import introSreen from './screens/intro-screen.js';

// const FIRST_SCREEN = introSreen;

// create dom el
const mainElement = document.querySelector(`#main`);

export const addScreenElement = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

export const generateScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
  //    не понятно
  // const backBtn = document.querySelector(`button.back`);
  // if (backBtn) {
  //   backBtn.addEventListener(`click`, () => {
  //     generateScreen(FIRST_SCREEN);
  //   });
  // }
};
