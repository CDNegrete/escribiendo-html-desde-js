// podemos adquirir las propiedades de cada etiqueta de la siguente forma

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

// mostrando todas las propiedades de las etiquetas que vamos a manipular en la consola

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

/* si queremos editar nuestras etiquetas desde JavaScript podemos hacer uso del inner que sirve para modificar
el texto en html */

h1.innerHTML = 'Patito <br> Feo';

/* usando ".innerText" podemos ver las etiquetas que se estan utilizando dentro de la etiqueta, como
podemos ver abajo hacemos uso de este la etiqueta "h1" y esto nos permite ver que tiene una etiqueta <br> que es un salto de linea */

h1.innerText = 'Patito <br> Feo';

/* para obtener un atributo tenemos que hacer uso del ".getAttribute()" como podemos ver abajo buscamos el atributo
de la clase */

//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo'); // eliminar el atributo rojo de la clase

/* tambien podemos anadir y quitar el contenido de la clase haciendo uso de ".classList.add" y ".classList.remove" */

h1.classList.add('rojo'); // anade una clase extra a la ya existente
h1.classList.remove('verde'); // elimina la clase
//h1.classList.toggle('verde');
//h1.classList.contains('verde');

input.value = '456' // modifica el valor por defecto

/* de la siguente forma podemos crear insertar elementos html desde JavaScrip en el siguente ejemplo es una etiqueta img
asignando un atributo haciendo uso de ".setAttribute()" dicendole de donde vendra esta imagen */

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/media/platzi-isotipo@2x.png');
console.log(img);

pid.innerHTML='';
pid.appendChild(img);