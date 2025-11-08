##Mariana Marquez Gil 
##206663

##Primera funcion 
function saludar_usuario(nombre) {
    console.log("¡Hola, " + nombre + "! Bienvenido al curso de programación.");
}
##Segunda funcion
function repetir_texto(texto, veces) {
    console.log((texto + " ").repeat(veces));
}

##Tercera funcion
function invertir_palabra(palabra){
 console.log(palabra.split("").reverse().join(""));
}

##Cuarta funcion
function contarVocales(texto) {
    let contador = 0;
    let vocales = "aeiou";
    for (let letra of texto.toLowerCase()) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    console.log(contador);
}

##Quinta funcion
##Devuelve el texto en mayusuculas y minusculas
function MayusculasYMinusculas(texto) {
    let mayusculas = texto.toUpperCase();##Mayusuculas
    let minusculas = texto.toLowerCase();##Minusuculas
    console.log(mayusculas, minusculas);
}

##Sexta funcion
##Calcula el promedio de una lista de nmeros
function promedio(numeros){

}
##Septima funcion
##Devuelve el max y min de una lista 
function maxYmin(numeros){
   let maximo= Math.max(numeros); ##equivale a max(numero) en Python
   let minimo= Math.min(numeros); ##equivale a min(numero) en Python
console.log(maximo, minimo);
}  

##Octava funcion
##Filtra y devuelve solo los pares de una lista 
function FiltraPares(numeros){
    let filtrarPares =  numeros.filter(n => n % 2 === 0);
console.log(filtrarPares);
}

##Novena funcion
##Une todos los elementos de una lisata de cadenas en una frames
function sumar_elementos_texto(lista_textos) {
    let resultado = lista_textos.join(" ");
    console.log(resultado);
}

##Decima funcion
##Buscar un elemento dentro de una lista
function buscar_elemento(lista, elemento) {
    let variable = lista.includes(elemento);
    console.log(variable);
}

##Onceava funcion 
##Cuenta cuantas palabras hay en una frase 
function contar_palabras(frase) {
    let palabras = frase.split(); 
    console.log(palabras.length);
}

##Doceava funcion 
function duplicar_elementos(lista) {
    let duplicados = lista.map(x => x * 2);
    console.log(duplicados);
}


##13.
##Convierte la primera letra de cada palabra en Mayuscula 
function capitalizar_Palabras(frase) {
    let resultado = frase.toLowerCase().replace(/\b\w/g, letra => letra.toUpperCase());
    console.log(resultado);
}


##14. 
function mezclar_listas(lista1, lista2) {
    let listcombinada = [];
    let tope = Math.min(lista1.length, lista2.length);
    for (let i = 0; i < tope; i++) {
        listcombinada.push(lista1[i]);
        listcombinada.push(lista2[i]);
    }
    console.log(listcombinada);
}

##15.
function contar_frecuencia(lista) {
    let conteo = {};
    for (let item of lista) {
        if (conteo[item]) {
            conteo[item] += 1;
        } else {
            conteo[item] = 1;
        }
    }
    console.log(conteo);
}



