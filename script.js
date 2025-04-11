console.log("Hola desde JS");

let botonLike = document.querySelectorAll(".like-boton");
    console.log(botonLike);

let numerosLike = document.querySelectorAll(".numero-likes");
console.log(numerosLike);

//------------------------ PRIMER INTENTO -----------------------------
//function likes(elemento){
//    numerolikes = elemento.parentNode;
//    num = numeroLikes.querySelector(".numero-likes")
//    num ++;
//    numeroLikes == num;
//}

function llamar(){
    console.log("anda");
    for(let i=0; i<botonLike.length; i++){
        let boton = botonLike[i];
        let numeroLike = numerosLike[i];
        boton.addEventListener("click", function(){
        //let numero = numeroLike.textContent;
        //numero ++;
        //numeroLike.textContent = numero;
        numeroLike.textContent ++;
    })
}
}

llamar();