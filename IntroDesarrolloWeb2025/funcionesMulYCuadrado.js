//Funcion para multiplicar 2 numeros funcion clasica
function Multiplicacion (num1, num2){
return num1*num2;
}
//Para probar la funcion 
console.log(Multiplicacion(2,3));//Te tiene que dar 6

//Funcion para multiplicar 2 numeros arrow function 
function MultArrow(num1, num2) {
    return num1, num2;
}
//Para probar la funcion 
console.log(MultArrow(2,3));//Igual te tiene que dar 6 porque no cambia nada solo la forma de funcion que usas 

//2 funciones para elevar al cuadrado que reciba un número: función clásica y arrow function
//Función que eleva al cuadrado el numero que recibe (Funcion clasica)
function elevaCuadrado(num){
return num*num;
}
//Para probar la funcion 
console.log(elevaCuadrado(9))//Tiene que dar de resultado 81 (9*9=81)

//Funcion que eleva al cuadrado el numero que recibe (Arrow function)
const elevaCuadr=(num)=>{
    return num*num;
}
//Para probar la funcion
console.log(elevaCuadr(9));//Tiene qe dar de resultado 81