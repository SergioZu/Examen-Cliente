function comenzarAccion(accion) {
    let texto = document.getElementById("textArea").value;
    //La siguiente sentencia pasa todo el texto a mayúsculas. Será el texto sobre el que se trabajará
    let textoBusqueda = texto.toUpperCase();

   
    if(accion=="patrones"){
        buscarPatrones(textoBusqueda);
    }else if(accion=="palabras"){
        buscarPalabras(textoBusqueda)
    }else{
        calcularNumPalabras(textoBusqueda);
    }
}

function buscarPatrones(textoBusqueda) {
    let patronesABuscar = ["34", "ES", "HO"];
    //Introduce las declaraciones necesarias para llevar a cabo la acción de búsqueda de patrones

    var arrayPalabras=new Array();
    
    var texto=textoBusqueda;
    arrayPalabras= texto.split(" ");
    var contador;

    for (let index = 0; index < arrayPalabras.length; index++) {
       contador= arrayPalabras.find( patronesABuscar[index]);
    }
    
    alert(contador.length+" TIENES ESOS PATRONES");

}

function buscarPalabras(textoBusqueda) {
    //Introduce el código necesario para llevar a cabo la acción de búsqueda de palabras
    var texto=textoBusqueda;
    
   
    var arrayPalabras=new Array();
    arrayPalabras= texto.split(" ");
    
    var des=new Array();
    var cont=0;
    arrayPalabras.sort();

    for (let index = arrayPalabras.length; index >=0 ; index--) {

        des[cont]=arrayPalabras[index];
        cont++;
        
    }
    alert(des);
}

function calcularNumPalabras(textoBusqueda) {
    //Introduce el código necesario para llevar a cabo la acción de calcular el número de palabras

    var texto=textoBusqueda;
    var contador=0;
   
    var arrayPalabras=new Array();
    arrayPalabras= texto.split(" ");
    arrayPalabras.forEach((elemento,i, arrayPalabras) => {
        arrayPalabras[i] = elemento + "!!";
        if(elemento.length>=7) {
            contador++;
        }
    });


    console.log(contador);
}