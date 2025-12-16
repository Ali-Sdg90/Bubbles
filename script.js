let body = document.getElementById("body");
let bubbleLength = 50;
let bubbleCount = 500;
let boxWidth = bubbleLength;
let boxHeight = bubbleLength;
for (let i = 0; i < bubbleCount; i++) {
    let newBox = document.createElement("div");
    newBox.style.width = `${boxWidth}px`;
    newBox.style.height = `${boxHeight}px`;
    let color = getRandomColor();
    newBox.style.backgroundColor = color;
    newBox.style.border = `1px solid ${color}`;
    newBox.style.opacity = "0.5";
    newBox.style.borderRadius = "50%";
    newBox.style.position = "absolute";
    newBox.style.boxSizing = "border-box";
    newBox.style.top = `${Math.floor(Math.random() * (window.innerHeight - boxHeight))}px`;
    newBox.style.left = `${Math.floor(Math.random() * (window.innerWidth - boxWidth))}px`;
    body.appendChild(newBox);
    setInterval(moveBox, 0.1, newBox);
}
function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // 0–255
    const g = Math.floor(Math.random() * 256); // 0–255
    const b = Math.floor(Math.random() * 256); // 0–255
    return `rgb(${r}, ${g}, ${b})`;
}
function moveBox (element) {
    let randomMove = Math.floor(Math.random() * 8);
    let currentTop = parseInt(element.style.top);
    let currentLeft = parseInt(element.style.left);
    let newTop = currentTop;
    let newLeft = currentLeft;
    let moveStep = 2;

    if (randomMove === 0) {
        newTop = currentTop - moveStep;
    }
    if (randomMove === 1) {
        newTop = currentTop - moveStep;
        newLeft = currentLeft + moveStep;
    }
    if (randomMove === 2) {
        newLeft = currentLeft + moveStep;
    }
    if (randomMove === 3) {
        newTop = currentTop + moveStep;
        newLeft = currentLeft + moveStep;
    }
    if (randomMove === 4) {
        newTop = currentTop + moveStep;
    }
    if (randomMove === 5) {
        newTop = currentTop + moveStep;
        newLeft = currentLeft - moveStep;
    }
    if (randomMove === 6) {
        newLeft = currentLeft - moveStep;
    }
    if (randomMove === 7) {
        newTop = currentTop - moveStep;
        newLeft = currentLeft - moveStep;
    }

    if (newTop < 0) {
        newTop = Math.floor(Math.random() * (window.innerHeight - boxHeight));
    }
    if (newTop > window.innerHeight - boxHeight) {
        newTop = Math.floor(Math.random() * (window.innerHeight - boxHeight));
    }
    if (newLeft < 0) {
        newLeft = Math.floor(Math.random() * (window.innerWidth - boxWidth));
    }
    if (newLeft > window.innerWidth - boxWidth) {
        newLeft = Math.floor(Math.random() * (window.innerWidth - boxWidth));
    }
    element.style.top = `${newTop}px`;
    element.style.left = `${newLeft}px`;
}