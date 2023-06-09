// creamos la funcion
function validarFormulario() {
    // removemos el div con la clase alert
    $('.alert').remove();
  
    // declarion de variables
    var nombre = $('#nombre').val(),
      correo = $('#correo').val(),
      asunto = $('#asunto').val(),
      mensaje = $('#mensaje').val();
  
    // validamos el campo nombre
    if (nombre == "" || nombre == null) {
      cambiarColor("nombre", true);
      // mostramos el mensaje de alerta
      mostraAlerta("Campo obligatorio");
      return false;
    } else {
      var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
      if (!expresion.test(nombre)) {
        // mostrara el mensaje que debe ingresar un nombre válido
        cambiarColor("nombre", true);
        mostraAlerta("No se permiten caracteres especiales o números");
        return false;
      }
      cambiarColor("nombre", false);
    }
  
    // validamos el correo
    if (correo == "" || correo == null) {
      cambiarColor("correo", true);
      // mostramos el mensaje de alerta
      mostraAlerta("Campo obligatorio");
      return false;
    } else {
      var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
      if (!expresion.test(correo)) {
        // mostrara el mensaje que debe ingresar un correo válido
        cambiarColor("correo", true);
        mostraAlerta("Por favor ingrese un correo válido");
        return false;
      }
      cambiarColor("correo", false);
    }
  
    // validamos el asunto
    if (asunto == "" || asunto == null) {
      cambiarColor("asunto", true);
      // mostramos el mensaje de alerta
      mostraAlerta("Campo obligatorio");
      return false;
    } else {
      var expresion = /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;
      if (!expresion.test(asunto)) {
        // mostrara el mensaje que debe ingresar un nombre válido
        cambiarColor("asunto", true);
        mostraAlerta("No se permiten caracteres especiales");
        return false;
      }
      cambiarColor("asunto", false);
    }
  
    // validamos el mensaje
    if (mensaje == "" || mensaje == null) {
      cambiarColor("mensaje", true);
      // mostramos el mensaje de alerta
      mostraAlerta("Campo obligatorio");
      return false;
    } else {
      var expresion = /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;
      if (!expresion.test(mensaje)) {
        // mostrara el mensaje que debe ingresar un nombre válido
        cambiarColor("mensaje", true);
        mostraAlerta("No se permiten caracteres especiales");
        return false;
      }
      cambiarColor("mensaje", false);
    }
  
    $('form').submit();
    return true;
  }
  
  function cambiarColor(elemento, error) {
    if (error) {
      $("#" + elemento).css("border-color", "red");
    } else {
      $("#" + elemento).css("border-color", "initial");
    }
  }
  
  function mostraAlerta(mensaje) {
    $("<div/>")
      .addClass("alert")
      .text(mensaje)
      .insertAfter("#" + elemento);
  }


  /* Inicio */
  window.addEventListener('load', function() {
    var inicioTitulo = document.querySelector('.inicio-titulo');
    var inicioDirector = document.querySelector('.inicio-director');
    inicioTitulo.style.opacity = '1';
    inicioTitulo.style.transform = 'translateX(0)';
    inicioDirector.style.opacity = '1';
    inicioDirector.style.transform = 'translateX(0)';
  });

  /* fondo */
  window.addEventListener('load', function() {
    var inicioTitulo = document.querySelector('.fondo-titu');
    var inicioDirector = document.querySelector('.fondo-titu2');
    inicioTitulo.style.opacity = '1';
    inicioTitulo.style.transform = 'translateX(0)';
    inicioDirector.style.opacity = '1';
    inicioDirector.style.transform = 'translateX(0)';
  });
    
  /* img */
  window.addEventListener('DOMContentLoaded', function() {
    var director = document.querySelector('.inicio-director');
    var titulo = document.querySelector('.inicio-titulo');
    var imagen = document.querySelector('.img-grupo');
  
    director.style.opacity = '1';
    director.style.transform = 'translateX(0)';
    
    titulo.style.opacity = '1';
    titulo.style.transform = 'translateX(0)';
  
    var windowWidth = window.innerWidth;
    var imageWidth = imagen.offsetWidth;
    var initialPosition = windowWidth;
  
    imagen.style.opacity = '1';
    imagen.style.transform = 'translateX(' + initialPosition + 'px)';
    imagen.style.transition = 'opacity 1s, transform 1s';
    setTimeout(function() {
      imagen.style.transform = 'translateX(0)';
    }, 100);
  });

  /* servicios */
 // Obtener el elemento del título
const tituloServicios = document.querySelector('.titulo-servicios');

// Función para mostrar el título con animación
function mostrarTitulo() {
   tituloServicios.style.opacity = 1;
   tituloServicios.style.transform = 'translateX(0)';
}

// Esperar a que se cargue el contenido y luego mostrar el título
document.addEventListener('DOMContentLoaded', function() {
   // Aplicar una clase para iniciar la transición (se activará después de que se agregue la clase)
   tituloServicios.classList.add('transicion-titulo');

   // Llamar a la función después de un breve retraso (puedes ajustar el tiempo según tus necesidades)
   setTimeout(mostrarTitulo, 100);
});
/* cards servicios */

