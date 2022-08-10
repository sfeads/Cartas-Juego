let root = document.querySelector("#root");


// BASE DE DATOS
let frutas = ['🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎'];
let frutas2 = ['🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎'];

let todas_las_frutas = frutas.concat(frutas2);


function agregar_datos_al_DOM(){


    todas_las_frutas.forEach(function(elemento,indice){

        let contenedor = document.createElement("div");

        contenedor.innerHTML = 
        '<div class="fruta">' +
        elemento +
        '</div>';

        root.appendChild(contenedor);

    });

}
agregar_datos_al_DOM();


// FUNCIÓN DE SELECCIÓN

let datos_del_dom = document.querySelectorAll(".fruta");

function activar(){
    this.classList.add("activar");
}

datos_del_dom.forEach(function(elemento, indice){
    
    elemento.addEventListener('click', activar);

});