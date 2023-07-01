const arregloPrenda = JSON.parse(localStorage.getItem("prenda-elegida"));//cargo con el localStorage que viene de la pag anterior
const contenedorDetalles = document.querySelector("#container-detalles");

mostrarPrenda();

function mostrarPrenda(){
    contenedorDetalles.innerHTML = "";
    arregloPrenda.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("objeto-elegido");
        if (element.alumno == -1){
            div.innerHTML=`
            <div class="objeto-elegido__imagenes">
                <img class="objeto-elegido__imagenes__img-frente" src="${element.imagen}" alt="">
                <img class="objeto-elegido__imagenes__img-dorzo" src="${element.perfil}" alt="">
            </div>
            <div class="objeto-elegido__detalles">    
                <p class="objeto-elegido__detalles__numero-objeto"> Numero de objeto ${element.id}</p>
                <p class="objeto-elegido__detalles__descripcion"> Descripcion: ${element.descripcion}</p>
                <p class="objeto-elegido__detalles__descripcion"> Marca: ${element.marca}</p>
                <p class="objeto-elegido__detalles__talle"> Talle: ${element.talle}</p>
                <button class="objeto__boton-detalles"> <a class="objeto__boton-detalles__a" href="index.html">Volver</a></button>

            </div>
            ` 
        }
        else{
            div.innerHTML=`
            <p class="objeto__mensaje-retiro">RETIRADO POR ALUMNO Nª ${element.alumno} </p>
            <div class="objeto-elegido__imagenes">
                <img class="objeto-elegido__imagenes__img-frente" src="${element.imagen}" alt="">
                <img class="objeto-elegido__imagenes__img-dorzo" src="${element.perfil}" alt="">
            </div>
            <div class="objeto-elegido__detalles">    
                <p class="objeto-elegido__detalles__numero-objeto"> Numero de objeto ${element.id}</p>
                <p class="objeto-elegido__detalles__descripcion"> Descripcion: ${element.descripcion}</p>
                <p class="objeto-elegido__detalles__descripcion"> Marca: ${element.marca}</p>
                <p class="objeto-elegido__detalles__talle"> Talle: ${element.talle}</p>
                <button class="objeto__boton-detalles"> <a class="objeto__boton-detalles__a" href="index.html">Volver</a></button>

            </div>
            `  
        }
        contenedorDetalles.append(div);
    });
    
}
