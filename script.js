let box = document.getElementsByClassName('d')[0];
let userHeight = document.getElementsByClassName('h')[0];
let userWeight = document.getElementsByClassName('w')[0];
let userColor = document.getElementsByClassName('c')[0];
let userText = document.getElementsByClassName('t')[0];
let userBorder = document.getElementsByClassName('b')[0];

userHeight.addEventListener('input', (said) => {
    said.preventDefault();
    box.style.height = userHeight.value + 'px';
});

userWeight.addEventListener('input', (said) => {
    said.preventDefault();
    box.style.width = userWeight.value  + 'px';
});

userColor.addEventListener('input', (said) => {
    said.preventDefault();
    box.style.backgroundColor = userColor.value;
});

userText.addEventListener('input', (said) => {
    said.preventDefault();
    box.textContent = userText.value;
});

userBorder.addEventListener('input', (said) => {
    said.preventDefault();
    box.style.borderRadius = userBorder.value + 'px';
});