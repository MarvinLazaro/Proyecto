//Ciclo de Cotizaciones
var cotizaciones = prompt("¿Desea realizar una cotizacion? Ingrese 'si' o 'salir' para finalizar las cotizaciones", "si/salir");

while("SI" == cotizaciones.toUpperCase()){

//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000;

//Valores de los recargos 
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%

var propiedades_recargo = 0.35; // 35%

var salario_recargo = 0.05; //5%


//Recargo
var recargo = 0;
var recargo_propiedades = 0;
var recargo_total = 0;
var recargo_total_propiedades = 0;
var recargo_total_final = 0;

//Precio final 
var precio_final = 0;


//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor");
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números");

nombre = nombre.toUpperCase();

//Convirtiendo la edad del asegurado a número
var edad_numero = parseInt(edad);

//Validando si cumple con la mayoria de edad
while (edad_numero<18) {
  alert("Número no valido, por favor ingrese un número mayor o igual a 18")
  var edad = prompt("Cuantos años tiene? Ingrese solamente números")
  var edad_numero = parseInt(edad)
};

// Ingresar datos de propiedades
var propiedades = prompt("¿Tiene propiedades a su nombre?", "si/no");
var propiedades_cantidad;
if("SI" == propiedades.toUpperCase()){
  propiedades_cantidad = prompt("¿Cuantas propiedades tiene? Ingrese solamente números")
};

//Convirtiendo la cantidad de propiedades a numeros
var propiedades_cantidad_numero = 0;
if("SI" == propiedades.toUpperCase()){
  propiedades_cantidad_numero = parseInt(propiedades_cantidad)
};

// Ingresar datos de salario
var salario_numero = 0;
var salario = prompt("Ingrese su salario, por favor ingrese solamente números");

//Convirtiendo el salario a numeros
salario_numero = parseInt(salario);

var casado = prompt("¿Está casado/a actualmente?", "si/no");
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge;
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a? Ingrese solamente números")
};
//convirtiendo las edades ingresadas a números 
var edad_conyuge_numero = 0;
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
};

var hijos = prompt("¿Tiene hijos o hijas?", "si/no");
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos;
/**
 * 1. convierta la cantidad de hijos a numero
 */

//Comprobando la cantidad de hijos, solamente si tiene
if("SI" == hijos.toUpperCase()){
    cantidad_hijos = prompt("Cuantos hijos tiene? Ingrese solamente números")
};

var cantidad_hijos_numero = 0;

if("SI" == hijos.toUpperCase()){
    cantidad_hijos_numero = parseInt(cantidad_hijos)
};

//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if(edad_numero>=18 && edad_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}
//aqui puede colocar un else if() con el siguiente rango

  else if(edad_numero>=25 && edad_numero<50){
      recargo = precio_base * edad_25
      recargo_total = recargo_total + recargo
  } else if (edad_numero>=50) {
        recargo = precio_base * edad_50
        recargo_total = recargo_total + recargo  
    };

/** 
 * 2. Recargo por la edad del conyuge
 */

if (edad_conyuge_numero>=18 && edad_conyuge_numero<25) {
    recargo = precio_base * casado_18
    recargo_total = recargo_total + recargo
} else if(edad_conyuge_numero>=25 && edad_conyuge_numero<50){
      recargo = precio_base * casado_25
      recargo_total = recargo_total + recargo
  } else if(edad_conyuge_numero>=50){
        recargo = precio_base * casado_50
        recargo_total = recargo_total + recargo
    };

/**
 * 3. Recargo por la cantidad de hijos 
 */ 
if(cantidad_hijos_numero>0){
  recargo = precio_base * hijos_recargo * cantidad_hijos_numero
  recargo_total = recargo_total + recargo
}

//Calculando recargo por salario
recargo = salario_numero * salario_recargo;
recargo_total = recargo_total + recargo;

precio_final = precio_base + recargo_total;

//Calculando recargo por propiedades si las tiene sobre el precio final
if(propiedades_cantidad_numero>0){
  recargo_propiedades = precio_final * propiedades_recargo * propiedades_cantidad_numero
  recargo_total_propiedades = recargo_total_propiedades + recargo_propiedades
  precio_final = precio_final + recargo_total_propiedades
} else
  precio_final = precio_final

//Suma de los recargos por propiedades y recargos del asegurado
recargo_total_final = recargo_total + recargo_total_propiedades;

//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total_final)
alert ("El precio total sera de: "+precio_final)

// Reingresar la variable del ciclo de cotizaciones
var cotizaciones = prompt("¿Desea realizar una cotizacion? Ingrese 'si' o 'salir' para finalizar las cotizaciones", "si/salir");
};