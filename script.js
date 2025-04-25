document.addEventListener('DOMContentLoaded', function() {
    // Menú hamburguesa
    const menuHamburguesa = document.getElementById('menuHamburguesa');
    const menu = document.getElementById('menu');
    
    menuHamburguesa.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    const enlacesMenu = document.querySelectorAll('.menu a');
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', function() {
            menu.classList.remove('active');
        });
    });
    
    // Efecto de cambio de color al hacer scroll
    window.addEventListener('scroll', function() {
        const cabecera = document.querySelector('.cabecera');
        if (window.scrollY > 50) {
            cabecera.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            cabecera.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            cabecera.style.backgroundColor = 'var(--blanco)';
            cabecera.style.boxShadow = 'var(--sombra)';
        }
    });
    
    // Animación de escritura para el título (opcional)
    const tituloHero = document.querySelector('.texto-hero h2');
    const textoOriginal = tituloHero.textContent;
    tituloHero.textContent = '';
    
    let i = 0;
    const velocidadEscritura = 100; // en milisegundos
    
    function typeWriter() {
        if (i < textoOriginal.length) {
            tituloHero.textContent += textoOriginal.charAt(i);
            i++;
            setTimeout(typeWriter, velocidadEscritura);
        }
    }
    
    // Iniciar la animación después de un pequeño retraso
    setTimeout(typeWriter, 500);
});