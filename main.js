let ingredientes = ["Harina","Levadura","Agua","Mortadela con pistachos","Azucar","Anana","Mozzarella","Salsa","Rucula","Jamon Crudo"];

let par = [];

let impar = [];

for(
    let i= 0;i<ingredientes.length;i++) {
    if(
        ingredientes[i].length % 2 ==0) {
        par.push(ingredientes[i]);
    }
    else{
        impar.push(ingredientes[i]);
    }
}

console.log(`Los ingredientes pares son: ${par}.`);
console.log(`Los ingredientes impares son: ${impar}.`);