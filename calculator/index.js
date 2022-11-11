let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttontext = e.target.innerText;
    console.log("Button text is ", buttontext);
    if (buttontext == "*") {
      buttontext = "*";
      screenValue += buttontext;
      screen.value = screenValue;
    } else if (buttontext == "AC") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttontext == "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue += buttontext;
      screen.value = screenValue;
    }
  });
}
