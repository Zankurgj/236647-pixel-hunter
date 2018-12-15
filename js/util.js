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
};
