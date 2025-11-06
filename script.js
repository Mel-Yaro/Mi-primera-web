const titulo = document.getElementById("titulo");

let estadoInicial = true;
let posicionTexto = 0;
let posicionProfecia = 0;
const textos = ["Este payaso hace de todo", "Adivino dizfrazado", "Este payaso se las inventa todas", "Adivino enmascarado","hace de todo", "payaso multifuncional"];
const textosProfecia = ["La risa es el mejor remedio", "El humor es la clave", "La alegría es contagiosa", "La diversión está asegurada", "La sorpresa es parte del show", "La magia está en el aire"];

profecia.innerText = textosProfecia[posicionProfecia];

textoInicial.innerText = textos[posicionTexto];

textoInicial.addEventListener("click", () => {
    posicionTexto++;
   textoInicial.innerText = textos[posicionTexto];
    if (posicionTexto === textos.length-1) {
       posicionTexto = 0;
   }
});

profecia.addEventListener("click", () => {
    posicionProfecia++;
   profecia.innerText = textosProfecia[posicionProfecia];
    if (posicionProfecia === textosProfecia.length-1) {
       posicionProfecia = 0;
   }
});

titulo.addEventListener("click", () => {
    if (estadoInicial === true) {
    titulo.innerText= "Este payaso lo sabe todo";
    
} else {
    titulo.innerText= "Adivino en la fiesta";
}
estadoInicial = !estadoInicial;
});








