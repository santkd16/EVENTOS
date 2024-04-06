// Función para generar un número aleatorio entre 0 y 'maximo'
function generarNumeroAleatorio(maximo) {
    return Math.floor(Math.random() * (maximo + 1));
  }
  
  // Función para generar un color RGB aleatorio
  function generarColorAleatorio() {
    const colorRojo = generarNumeroAleatorio(255);
    const colorVerde = generarNumeroAleatorio(255);
    const colorAzul = generarNumeroAleatorio(255);
    return `rgb(${colorRojo}, ${colorVerde}, ${colorAzul})`;
  }
  
  // Función para cambiar el color de fondo del cuerpo del documento
  function cambiarColorDeFondo() {
    const colorAleatorio = generarColorAleatorio();
    document.body.style.backgroundColor = colorAleatorio;
  }
  
  // Seleccionar el botón del documento
  const boton = document.querySelector("button");
  
  // Agregar un evento de clic al botón para cambiar el color de fondo
  boton.addEventListener("click", cambiarColorDeFondo);
  