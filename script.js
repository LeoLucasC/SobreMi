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




//Funcion que se me aplica el estil ala opcion seleccionada en el menuy la previamente seleccionado
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className="";
    opciones[1].className="";
    opciones[2].className="";
    opciones[3].className="";
    opciones[4].className="";
    link.className="seleccionado";

    //hacemos desaparecer el menu una vez se ha seleccioando una opcion en el modo responsive
    var x = document.getElementById("nav")
    x.className ="";


}
//funcion que muestra el menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animacion de las barras de habilidades
window.onscroll=function(){
    efectoHabilidades()
};

//funcion que aplica ala animacion de barra de habilidades
function efectoHabilidades(){
    var skills=document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
}