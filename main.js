
const url = "objetosPerdidos.txt";
const contenedorProductos = document.querySelector("#container-objetos");
let botonesAgregar = document.querySelectorAll(".boton-detalles");
const objetoElegido=[];
const objetosPerdidos=[];


fetch(url)
  .then(response => response.json())
  .then(data => copiarArreglo(data))
  .catch(error => console.error(error));

// guardo los datos en un arreglo aparte para trabajar en guardarPrenda
function copiarArreglo(data){
    data.forEach(element => {
        objetosPerdidos.push(element);
    })
    cargarProductos(data)
}




function cargarProductos(data){
    objetoElegido.length = 0;
    contenedorProductos.innerHTML = ""; //vacio todo el listado de productos para que no se repitan
    data.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("objeto");
        if (element.alumno == -1){
            div.innerHTML = `
            <p class="objeto__numero-objeto"> Numero de Objeto ${element.id}</p>
            <img class="objeto__imagen-principal" src="${element.imagen}" alt="" >
            <div class="objeto__descripcion-corta">
                <p class="objeto__descripcion"> ${element.descripcion}</p>
                <button class="objeto__boton-detalles" id="${element.id}"> VER MAS </button>
            </div>
            `
        }
        else{
            div.innerHTML = `
                <p class="objeto__mensaje-retiro">RETIRADO POR ALUMNO Nª ${element.alumno} </p>
                <p class="objeto__numero-objeto"> Numero de Objeto ${element.id}</p>
                <img class="objeto__imagen-principal opacidad" src="${element.imagen}" alt="" >
                <div class="objeto__descripcion-corta">
                    <p class="objeto__descripcion"> ${element.descripcion}</p>
                    <button class="objeto__boton-detalles" id="${element.id}"> VER MAS </button>
                </div>
            `
        }
        contenedorProductos.append(div);
    });
    actualizarBotonesDetalles(); //actualizo botones ver mas
}


function actualizarBotonesDetalles(){
    botonesAgregar = document.querySelectorAll(".objeto__boton-detalles");
    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click",guardarPrenda);
    });
}

function guardarPrenda(e){
    const idBoton = e.currentTarget.id;
    const index = objetosPerdidos.findIndex(producto => producto.id == idBoton);
    console.log(index);
    objetoElegido[0] = objetosPerdidos[index];
    localStorage.setItem("prenda-elegida",JSON.stringify(objetoElegido)); // guardo en el localStorage un arreglo con los productos cargados de carrito
    window.location.href="detalleRopa.html";
}


