//Javascript ce lit de haut en bas

// // variable est une boite dans laquel on stock des choses
// var unText = "Voici un text"; //creer une variable en lui donnant un nom
// console.log(unText);

// unText = "nouveau text";
// console.log(unText);

// const prenom = "Ayoub" //variable constante elle ne peut donc pas changer
// console.log(prenom);

// let unChiffre = 24; // variable faite pour changer
// unChiffre = 12;
// console.log(unChiffre);

// let chaine = "Je suis une chaine de caractere";
// let nouvelleChaine = "Chaine precedente : " + chaine; //concatenation de variables
// console.log(nouvelleChaine);

// //Type de données
// let string = "Je suis une chaine"; //texte
// let number = 24; //nombre
// let boolean = true; //vrai faux
// let array = ["Je", "suis", 24, false] //tableau
// let object = {prenom: "ayoub", age: 22, ville: "romainville"}; //objet
// let arbre = null;
// console.log(typeof arbre);
// console.log(arbre);

// let total = 0;
// let x = 4;
// total = total + 1; //total++ ou ++total
// console.log(total);
// total = ++x
// console.log(total);

///////////////////////
// let x = 2;
// let y = 5;

// if (x === y || x > 3) { // !x = false / x===y = on la meme valeur et le type / x==y on a uniquement la meme valeur / !== inegaux  / || = ou / && = et
//     console.log("x est inferieur a y");
// }
// else {
//     console.log("x est superieur a y");
// }

// x == y ? console.log("True") : console.log("False"); //fonction ternair
////////////////////////

// // fonction/////////////
//  function faireQuelqueChose(/*parametre*/) {  //declare une fonction
//     console.log("Je fais un truc !");
//     console.log("Trop cool");
//  }
//  faireQuelqueChose(); //appeller une fonction

//  const faireUneTache = (tache) => { //autre maniere de declarer une fonction (fonction flecher)
//     console.log("Je fais : " + tache);
//  }
//  faireUneTache("les course");
//  faireUneTache("caca");

//  function calc(x, y) {
//     return x + y;
//  }

//  (function maFonction() { //fonction qui se joue toute seul
//     console.log("Je me joue toute seule");
//  })();

//  (() => { //fonction flecher qui se joue toute seul
//     console.log("UwU");
//  })();
// //////////////////////////
 

// calculatrice
let total = 0;

function addition(x) {
    total += x;
    return total;
}
function soustraction(x) {
    total -= x;
    return total;
}
function division(x) {
    if (total ===0){
        return (total = x);
    }
    else{
        total /= x;
        return total;
    }
}
function multiplication(x) {
    if (total ===0){
        return (total = x);
    }
    else{
        total *= x;
        return total;
    }
}
function reset() {
    total = 0;
}