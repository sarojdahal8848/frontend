const display = document.querySelector(".display");

const appendToDisplay = (value) => {
  display.value += value;
};

const clearDisplay = () => {
  display.value = "";
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};
