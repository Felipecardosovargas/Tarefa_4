const colorBox = document.getElementById("colorBox");
const body = document.body;
const colorHistory = document.getElementById("colorHistory");
const changeColorButton = document.getElementById("changeColorButton");
const resetButton = document.getElementById("resetButton");
const toggleRandomMode = document.getElementById("toggleRandomMode");
const elementSelector = document.getElementById("elementSelector");

let randomMode = false;
let originalColor = colorBox.style.backgroundColor;

// Função para gerar uma cor aleatória
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Função para adicionar cor ao histórico
function addToHistory(color) {
    const li = document.createElement("li");
    li.style.backgroundColor = color;
    colorHistory.appendChild(li);
}

// Função para alterar a cor do elemento no modo aleatório
function playClickSound() {
    const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
    audio.play();
}

// Função para alterar a cor do elemento selecionado
function changeColor() {
    const selectedElement = elementSelector.value === "color-box" ? colorBox : body;
    const randomColor = getRandomColor();

    selectedElement.style.backgroundColor = randomColor;

    if (selectedElement === colorBox) {
        colorBox.textContent = "Nova Cor!";
        colorBox.style.color = randomColor;
    }

    addToHistory(randomColor);
    playClickSound();
}

// Função para redefinir a cor
function resetColor() {
    colorBox.style.backgroundColor = "lightgray";
    colorBox.style.color = "black";
    colorBox.textContent = "Clique no botão";
    body.style.backgroundColor = "#f4f4f4";
}

// Função para ativar/desativar o modo aleatório
function toggleRandomColors() {
    randomMode = !randomMode;
    toggleRandomMode.textContent = `Modo Aleatório: ${randomMode ? "Ligado" : "Desligado"}`;
    if (randomMode) {
        startRandomMode();
    }
}

// Função para iniciar o modo aleatório
function startRandomMode() {
    if (randomMode) {
        changeColor();
        setTimeout(startRandomMode, 500);
    }
}

// Adicionar atalhos de teclado
document.addEventListener("keydown", (event) => {
    if (event.key === "c") {
        changeColor();
    } else if (event.key === "r") {
        resetColor();
    } else if (event.key === "m") {
        toggleRandomColors();
    }
});

// Event Listeners
changeColorButton.addEventListener("click", changeColor);
resetButton.addEventListener("click", resetColor);
toggleRandomMode.addEventListener("click", toggleRandomColors);