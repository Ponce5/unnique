const iconoMenu = document.querySelector('#icono-menu'),
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

    // Alternamos estilos para el menú y body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    if (menu.classList.contains('active')) {
        document.body.style.overflow = "visible"; // Evita hacer scroll hacia abajo
    } else {
        document.body.style.overflow = "hidden"; // Permite hacer scroll hacia abajo
    }

    // Alternamos su atributo 'src' para el ícono del menú
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == 'bar-de-hamburguesas.png'){
        e.target.setAttribute('src','menu.png');
    }else{
        e.target.setAttribute('src','menu.png');
    }
});




