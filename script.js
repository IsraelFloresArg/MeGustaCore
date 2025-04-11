console.log("Hola desDe JS");

let botonLike = document.querySelectorAll(".like-boton");
    console.log(botonLike);

function likes(elemento){
    numerolikes = elemento.parentNode;
    num = numeroLikes.querySelector(".numero-likes")
    num ++;
    numeroLikes == num;
}


    for(let i=0; i<botonLike; i++){
    botonLike[i].addEventListener("click", function(numeroLikes){
        numeroLikes = document.querySelectorAll(".numero-likes");
        console,log(numeroLikes);
        let numero = numeroLikes.textContent;
        numero ++;
        numeroLikes == numero;
    })
}