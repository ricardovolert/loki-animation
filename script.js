const fonts = ['font-1', 'font-2', 'font-3'];
const styles = ['normal', 'bold', 'italic'];
let interactionCount = 0;

// Defina as fontes fixas que deseja usar após 20 interações
const fixedFonts = ['font-3', 'font-2', 'font-1', 'font-2']; // Exemplo: ordem personalizada

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomizeStyles() {
    const spans = document.querySelectorAll('#loki-animacao span');
    interactionCount++;

    spans.forEach((span, index) => {
        if (interactionCount > 10) {
            // Use a fonte fixa com base na posição
            const fixedFont = fixedFonts[index % fixedFonts.length];
            span.className = `${fixedFont} ${styles[0]}`; // Pode definir qualquer estilo desejado
        } else {
            // Continue randomizando
            const randomFont = getRandomElement(fonts);
            const randomStyle = getRandomElement(styles);
            span.className = `${randomFont} ${randomStyle}`;
        }
    });
}

// Inicializar randomização
randomizeStyles();

// Mudar estilos a cada segundo
setInterval(randomizeStyles, 1000);
