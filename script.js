const container = document.getElementById('container');
const names = ['Mugiwara', 'Luffy', 'Straw Hat', 'Monkey D. Luffy'];
const colors = ['#ff4d4d', '#ffcc00', '#ffffff', '#4da6ff', '#9933ff'];

function createText() {
    const div = document.createElement('div');
    div.className = 'luffy-text';
    div.innerText = names[Math.floor(Math.random() * names.length)];
    
    const size = Math.floor(Math.random() * 80) + 20;
    const left = Math.floor(Math.random() * 90);
    const top = Math.floor(Math.random() * 90);
    const duration = Math.floor(Math.random() * 3) + 2;
    const color = colors[Math.floor(Math.random() * colors.length)];

    div.style.fontSize = `${size}px`;
    div.style.left = `${left}%`;
    div.style.top = `${top}%`;
    div.style.color = color;
    div.style.setProperty('--duration', `${duration}s`);
    
    container.appendChild(div);
}

for (let i = 0; i < 15; i++) {
    createText();
}

const mainTitle = document.createElement('h1');
mainTitle.className = 'straw-hat-header';
mainTitle.innerText = 'MUGIWARA STRAW HAT';
container.appendChild(mainTitle);