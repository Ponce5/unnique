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






const API_KEY = 'keyI1EtFHd9ZZYQhh';
const BASE_ID = 'appzCgLFEtZn6pYIe';
const TABLE_NAME = 'mas-vendido';

// Obtiene los datos de la columna por ID de registro
function obtenerDatosDeAirtable(recordId) {
	fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}/${recordId}`, {
		headers: {
			Authorization: `Bearer ${API_KEY}`
		}
	})
	.then(response => response.json())
	.then(data => {
		// Actualiza los elementos HTML con los datos obtenidos
		document.getElementById('image').src = data.fields.Image;
		document.getElementById('image2').src = data.fields.Image2;
		document.getElementById('product').textContent = data.fields.Product;
		document.getElementById('description').textContent = data.fields.Description;
		document.getElementById('availability').textContent = data.fields.Availability;
		document.getElementById('ch').textContent = data.fields.CH;
		document.getElementById('g').textContent = data.fields.G;
		document.getElementById('m').textContent = data.fields.M;
	})
	.catch(error => console.error(error));
}

var recordId = localStorage.getItem('recordId');
// Llama a la función para obtener los datos del registro con ID "record123"
obtenerDatosDeAirtable(recordId);




  




$(document).ready(function() {
  var currentIndex = 1;
  $('.slider-dot').on('click', function() {
    var newIndex = $(this).data('index');
    if (newIndex !== currentIndex) {
      $('.slider-dot').removeClass('ac');
      $(this).addClass('ac');
      $('.slider-images img').eq(currentIndex-1).removeClass('ac');
      $('.slider-images img').eq(newIndex-1).addClass('ac');
      currentIndex = newIndex;
    }
  });
});









