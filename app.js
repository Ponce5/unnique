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



$(document).ready(function() {

	// Conectar a la base de datos Airtable
	var airtable_base_id = 'appzCgLFEtZn6pYIe';
	var airtable_api_key = 'keyI1EtFHd9ZZYQhh';
	var airtable_table_name = 'imagenes';

	var airtable_url = 'https://api.airtable.com/v0/' + airtable_base_id + '/' + airtable_table_name + '?api_key=' + airtable_api_key;

	// Obtener los registros de la tabla
	$.get(airtable_url, function(data) {

		// Obtener las URLs de las imágenes y guardarlas en un arreglo
		var images = [];
		$.each(data.records, function(index, record) {
			var image_url = record.fields['img url'];
			if (image_url) {
				images.push(image_url);
			}
		});

		// Configurar el carrusel de imágenes
		var image_index = 0;
		var image_count = images.length;
		var interval_time = 5000;

		function change_image() {
			$('.carousel-image').fadeOut(500, function() {
			  $(this).attr('src', images[image_index]);
			  $(this).fadeIn(500);
			  image_index++;
			  if (image_index >= image_count) {
				image_index = 0;
			  }
			});
		  }
		  

		change_image();
		setInterval(change_image, interval_time);

	});

});



$(document).ready(function() {

  // Conectar a la base de datos Airtable
  var airtable_base_id = 'appzCgLFEtZn6pYIe';
  var airtable_api_key = 'keyI1EtFHd9ZZYQhh';
  var airtable_table_name = 'mas-nuevo';

  var airtable_url = 'https://api.airtable.com/v0/' + airtable_base_id + '/' + airtable_table_name + '?api_key=' + airtable_api_key;

  // Obtener los registros de la tabla
  $.get(airtable_url, function(data) {

    // Obtener los datos de los productos y guardarlos en un arreglo
    var products = [];
    $.each(data.records, function(index, record) {
      var product = {
        image: record.fields['Image'],
        name: record.fields['Product'],
        description: record.fields['Description'],
        price: record.fields['M'],
        availability: record.fields['Availability'],
        rowNumber: record.id  // Agregar el número de fila al objeto "product"
      };
      products.push(product);
    });

    // Agregar los productos a la sección "Lo más nuevo"
    var new_arrivals_section = $('.new-arrivals');
    var product_list = $('<div>').addClass('product-list');
    $.each(products, function(index, product) {
      var product_div = $('<div>').addClass('product');
      var product_image = $('<img>').attr('src', product.image);
      var product_name = $('<h3>').text(product.name);

      var product_availability = $('<div>').addClass('product-availability').text(product.availability);
      var product_price = $('<div>').addClass('price').text(product.price);
      var product_row_number = $('<div>').addClass('row-number').text(product.rowNumber); // Crear un elemento de div para mostrar el número de fila
      product_div.append(product_image, product_name, product_availability, product_price, product_row_number); // Agregar el número de fila al producto
      product_list.append(product_div);

    new_arrivals_section.append(product_list);

    product_image.on('click', function() {
      localStorage.setItem('recordId', product.rowNumber);
      window.location.href = 'productindex.html';
    });

  });
  });

});





  
  

  









  $(document).ready(function() {

    // Conectar a la base de datos Airtable
    var airtable_base_id = 'appzCgLFEtZn6pYIe';
    var airtable_api_key = 'keyI1EtFHd9ZZYQhh';
    var airtable_table_name = 'mas-vendido';
  
    var airtable_url = 'https://api.airtable.com/v0/' + airtable_base_id + '/' + airtable_table_name + '?api_key=' + airtable_api_key;
  
    // Obtener los registros de la tabla
    $.get(airtable_url, function(data) {
  
      // Obtener los datos de los productos y guardarlos en un arreglo
      var products = [];
      $.each(data.records, function(index, record) {
        var product = {
          image: record.fields['Image'],
          name: record.fields['Product'],
          description: record.fields['Description'],
          price: record.fields['M'],
          availability: record.fields['Availability'],
          rowNumber: record.id  // Agregar el número de fila al objeto "product"
        };
        products.push(product);
      });
  
      // Agregar los productos a la sección "Lo más nuevo"
      var new_arrivals_section = $('.new-arrivals2');
      var product_list = $('<div>').addClass('product-list2');
      $.each(products, function(index, product) {
        var product_div = $('<div>').addClass('product2');
        var product_image = $('<img>').attr('src', product.image);
        var product_name = $('<h3>').text(product.name);
  
        var product_availability = $('<div>').addClass('product-availability2').text(product.availability);
        var product_price = $('<div>').addClass('price2').text(product.price);
        var product_row_number = $('<div>').addClass('row-number2').text(product.rowNumber); // Crear un elemento de div para mostrar el número de fila
        product_div.append(product_image, product_name, product_availability, product_price, product_row_number); // Agregar el número de fila al producto
        product_list.append(product_div);
 
      new_arrivals_section.append(product_list);
  
      product_image.on('click', function() {
        localStorage.setItem('recordId', product.rowNumber);
        window.location.href = 'productindex.html';
      });
  
    });
    });
  
  });
  






  const btn = document.getElementById('btn-options');
const modal = document.getElementById('options-modal');

btn.addEventListener('click', () => {
  modal.style.display = 'block';
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});



  
  

  







  