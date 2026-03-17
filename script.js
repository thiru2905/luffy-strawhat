const container = document.getElementById('container');
const phrases = ['Mugiwara Luffy', 'Monkey D. Luffy', 'Luffy', 'Future King', 'Joyboy'];
const fonts = ['Permanent Marker', 'Bangers', 'Cinzel', 'Shadows Into Light'];
const colors = ['#ff4500', '#ffd700', '#ffffff', '#ff0000', '#8b0000'];

function createText() {
    const el = document.createElement('div');
    el.className = 'floating-text';
    el.innerText = phrases[Math.floor(Math.random() * phrases.length)];
    
    const fontSize = Math.floor(Math.random() * (60 - 20) + 20) + 'px';
    const left = Math.floor(Math.random() * 90) + '%';
    const top = Math.floor(Math.random() * 90) + '%';
    const duration = Math.floor(Math.random() * (5 - 2) + 2) + 's';
    const delay = Math.floor(Math.random() * 5) + 's';

    el.style.fontSize = fontSize;
    el.style.left = left;
    el.style.top = top;
    el.style.color = colors[Math.floor(Math.random() * colors.length)];
    el.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
    el.style.animationDuration = duration;
    el.style.animationDelay = delay;

    container.appendChild(el);
}

for (let i = 0; i < 25; i++) {
    createText();
}