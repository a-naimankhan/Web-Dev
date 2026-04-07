let allButtons = document.getElementById("color-buttons");
let randomButton = document.getElementById("random-button");
let resetButton = document.getElementById("reset-button");
let colorcodeDisplay = document.getElementById("color-code");
let body = document.querySelector("body");


function changeBackground(color) {
    let backgroundColor = document.body.style.backgroundColor
    backgroundColor = color;

    backgroundColor.addEventListener("click", () => {
        document.body.style.backgroundColor = backgroundColor;
    })
}


