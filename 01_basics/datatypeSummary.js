const id = Symbol('123')
const anotherId = Symbol('13')

console.log(id)
console.log(id == anotherId);
console.log(typeof id);

const bigNumber = 84579347523987542342342352352352n
console.log(bigNumber);


// Array, objects, functions

let heros = ["shaktiman", "naagraj", "doga"];
console.log(heros);
console.log(typeof heros);

let myObject = {
    name: "archit",
    age: "22",
}
console.log(myObject);
console.log(typeof myObject);

let myFunction = function(){
    console.log("Namaste javascript");
}

myFunction();
// console.log(myFunction);
console.log(typeof myFunction);