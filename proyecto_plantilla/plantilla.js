var imagenes = [
    '../../img/sinDefinir/DSC04177.png',
    '../../img/sinDefinir/DSC04179.png',
    
    '../../img/sinDefinir/DSC04181.png',
    '../../img/sinDefinir/DSC04187.png'
];

indiceImagen = 0;
var intervaloTiempo = 2500; // Cambiar cada 3 segundos (3000 milisegundos)

function cambiarImagen() {
    // Actualizar la fuente de la imagen
    document.getElementById('img').src = imagenes[indiceImagen];
    
    // Incrementar el índice de la imagen (y volver al principio si llega al final)
    indiceImagen = (indiceImagen + 1) % imagenes.length;
}

// Llamar a la función cambiarImagen() cada intervaloTiempo milisegundos
var intervalo = setInterval(cambiarImagen, intervaloTiempo);

// Detener la rotación de imágenes al hacer clic en la imagen
document.getElementById('img').addEventListener('click', function() {
    clearInterval(intervalo); // Detener el intervalo
});





// var imagenes = [
//     '../../img/sinDefinir2/DSC04195.png',
//     '../../img/sinDefinir2/DSC04191.png',
//     '../../img/sinDefinir2/DSC04192.png',
//     '../../img/sinDefinir2/DSC04195.png'
// ];


// indiceImagen = 0;
// var intervaloTiempo = 2500; // Cambiar cada 3 segundos (3000 milisegundos)

// function cambiarImagen() {
//     // Actualizar la fuente de la imagen
//     document.getElementById('img2').src = imagenes[indiceImagen];
    
//     // Incrementar el índice de la imagen (y volver al principio si llega al final)
//     indiceImagen = (indiceImagen + 1) % imagenes.length;
// }

// // Llamar a la función cambiarImagen() cada intervaloTiempo milisegundos
// var intervalo = setInterval(cambiarImagen, intervaloTiempo);

// // Detener la rotación de imágenes al hacer clic en la imagen
// document.getElementById('img2').addEventListener('click', function() {
//     clearInterval(intervalo); // Detener el intervalo
// });





