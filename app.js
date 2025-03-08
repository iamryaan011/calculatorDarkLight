//css e userPreference
let userPreference = document.querySelector('input[type="checkbox"]');

let root = document.documentElement;

const applyThemeFromStorage = () => {
  const savedTheme = localStorage.getItem("Theme");

  //define as cores e as mantém no banco de dados
  if (savedTheme === "Light Mode") {
    root.style.setProperty("--body", "#fff");

    root.style.setProperty("--backgroundColor", "#fafafa");

    root.style.setProperty("--bgColorButtonHover", "#ebebeb");
    root.style.setProperty("--bgButton", "#efefef");
    root.style.setProperty("--boxShadowButton", "#cbcaca");

    root.style.setProperty("--border", "#d9d9d9");
    root.style.setProperty("--font", "#4b4b4d");

    userPreference.checked = false;
  } else {
    root.style.setProperty("--body", "#141414");

    root.style.setProperty("--backgroundColor", "#121212");

    root.style.setProperty("--bgColorButtonHover", "#161616");
    root.style.setProperty("--bgButton", "#121212");
    root.style.setProperty("--boxShadowButton", "#080808");

    root.style.setProperty("--border", "#080808");
    root.style.setProperty("--font", "#FFF");

    userPreference.checked = true;
  }
};

const changeUserPreference = () => {
  //verifica as preferências do usuário
  if (userPreference.checked) {
    localStorage.setItem("Theme", "Dark Mode");
  } else {
    localStorage.setItem("Theme", "Light Mode");
  }

  applyThemeFromStorage();
};

//aplicar o tema armazenado ao carregar a página
window.addEventListener("DOMContentLoaded", applyThemeFromStorage());

//funções da calculadora
const display = document.querySelector("#resultDisplay");

let expression = [];

const Calculate = (input) => {
  if (input === "CE" || input === "C") {
    display.innerText = "";
    return;
  }

  if (input === "=") {
    if (display.innerText.trim() === "") display.innerText = 0;

    try {
      display.innerText = eval(display.innerText)
    } catch (error) {
      display.innerText = "Operação inválida!";
    }
    return;
  }

  display.innerText += input;
};

const backSpaceButton = (value) => {
  if (value === "delete") {
    display.innerText = display.innerText.slice(0, -1);
  }
};
