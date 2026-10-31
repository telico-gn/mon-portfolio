//EXO:2 Fonction qui dit bonjour à quelque
function dirBonjour(nom) {
  return "Bonjour " + nom;
}
console.log(dirBonjour("Benjamin"));
//EXO:2 Determiner si la personne est mineur ou majeur

function testAge(age) {
  if (age >= 15) {
    console.log("Bravo vous êtes un Grand");
  } else {
    console.log("Désolé Vous êtes mineur dabord");
  }
  return age;
}
console.log(testAge(33));

//EXO:3 Calcul d'un carré
function carreNombre(a) {
  return "Voici le carrée de " + a + " est " + a * a;
}
console.log(carreNombre(9));

//EXO:4 Le Plus Grand Nombre
function comparNombre(a, b) {
  if (a > b) {
    return "Le nombre " + a + " est le plus grand que " + b;
  } else if (a == b) {
    return " les deux nombre sont identique";
  } else {
    return "Le nombre " + b + " est le plus grand que " + a;
  }
}
console.log(comparNombre(12, 8));
console.log(comparNombre(3, 9));
console.log(comparNombre(5, 5));

//EXO:5 Fonction mention de moyenne
function mentinNote(note) {
  if (note >= 16) {
    return "Excellent vous avez " + note + " comme note";
  } else if (note >= 12) {
    return "Bien vous avez " + note + " comme note";
  } else {
    return "Passable";
  }
}
console.log(mentinNote(10));
