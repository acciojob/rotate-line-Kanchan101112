let angle = 0; // initial angle

const line = document.getElementById('line');

// Rotate the line every 20 milliseconds
setInterval(() => {
    angle += 2; // increase angle by 2 degrees
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}, 20);