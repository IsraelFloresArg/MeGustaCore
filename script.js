console.log("Hola desDe JS");

let botonLike = document.querySelectorAll(".like-boton");
    console.log(botonLike);

//------------------------ PRIMER INTENTO -----------------------------
//function likes(elemento){
//    numerolikes = elemento.parentNode;
//    num = numeroLikes.querySelector(".numero-likes")
//    num ++;
//    numeroLikes == num;
//}

let numerosLike = document.querySelectorAll(".numero-likes");
console.log(numerosLike);


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