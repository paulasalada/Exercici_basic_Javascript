//fase1

var nom = ["P", "A", "U", "L", "A"];

for(var i =0; i<nom.length; i++) {
    vocalsennom(nom[i]);
    }

//fase 2
    function vocalsennom (lletra) {
        var vocals= ["A","E","I","O","U"];
    
        if (!isNaN (nom[i])){
            console.log("Els noms de persones no tenen numeros!");
        }
        else if (vocals.indexOf(lletra)>-1) {
            console.log("es Vocal!");
        }
        else { 
        console.log("consonant");
        }
    }
//fase 3

let miMapa = new Map();

for(var i =0; i<nom.length; i++) {
   if (miMapa.has(nom[i])){
       miMapa.set(nom[i], miMapa.get (nom[i]) + 1);
   }else{
       miMapa.set(nom[i],1);
   }
}

// fase4 

var nom = ["P", "A", "U", "L", "A"];
var cognom = ["S","A","L","A","D","A"];
var myFullName = [];

myFullName.push(...nom," ",...cognom);
console.log(myFullName);