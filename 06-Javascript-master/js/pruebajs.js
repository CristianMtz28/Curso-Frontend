'use strict'

var age = confirm('¿Eres mayor de edad?');
console.log(age);

if(age == true){
    if(age == true){
        var year = prompt('Pon tu año de nacimiento', 1980)
        if(year<=2001){
            alert('Puedes comprar alcohol');
        } else {
            alert('Pinche mentiroso no eres mayor de edad');
        }
    }
} else {
    alert('No puedes comprar alcohol');
}