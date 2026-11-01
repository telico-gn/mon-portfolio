const competences = ["HTML", "CSS", "JavaScript"];
// affiche la premiere competence
console.log(competences[0]);
//affiche la taitle du tableau
console.log(competences.length);
//ajoute dans le tableau ou liste
competences.push("React");
//affiche le tableau avec tout le contenu
console.log(competences);

//boucle for et affiche le contenu du debut à la fin
for (let i = 0; i < competences.length; i++) {
  console.log("Competence " + (i + 1) + " : " + competences[i]);
}

//un tableau avec des contenu different
const profil = {
  nom: "Benjamin Gbamou",
  age: 32,
  metier: "Développeur Web et Mobile",
};
console.log(profil.nom);
console.log(profil.metier);

//exercice1 du jour5
const profile = {
  nom: "Gbamou",
  prenom: "Benjamin",
  age: 32,
  metier: "Développeur Web et Mobile",
};
profil.ville = "Conakry";
console.log(profil);

//Exercices2 du jour5 pour calculer la somme

function somme(nombres) {
  let total = 0;
  for (let i = 0; i < nombres.length; i++) {
    total = total + nombres[i];
  }
  return total;
}
console.log(somme([4, 8, 15]));
