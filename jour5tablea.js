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

//exercices bilan jour 5
const eleves = [
  { nom: "Hawa", note: 15 },
  { nom: "Moussa", note: 9 },
  { nom: "Fanta", note: 17 },
  { nom: "Ibrahim", note: 12 },
];
// cas 1 pour resoudre
for (let i = 0; i < eleves.length; i++) {
  if (eleves[i].note >= 16) {
    console.log(
      eleves[i].nom + " : " + eleves[i].note + " Mention 'EXCELLENT'",
    );
  } else if (eleves[i].note >= 12) {
    console.log(eleves[i].nom + " : " + eleves[i].note + " Mention 'BIEN'");
  } else {
    console.log(eleves[i].nom + " : " + eleves[i].note + " Mention 'PASSABLE'");
  }
}

// cas 2 pour resoudre
function mention(notes) {
  if (notes >= 16) {
    return "EXCELLENT";
  } else if (notes >= 12) {
    return "BIEN";
  } else {
    return "PASSABLE";
  }
}
for (let i = 0; i < eleves.length; i++) {
  console.log(
    eleves[i].nom + " : " + eleves[i].note + " - " + mention(eleves[i].note),
  );
}

// pour la moyenne
function moyenne(liste) {
  let total = 0;
  for (let i = 0; i < liste.length; i++) {
    total = total + liste[i].note;
  }
  return total / liste.length;
}
console.log(moyenne(eleves));

//function pour trier la meilleure note
function meilleurEleve(liste) {
  let meilleure = liste[0];
  for (let i = 0; i < liste.length; i++) {
    if (liste[i].note >= meilleure.note) {
      meilleure = liste[i];
    }
  }
  return meilleure;
}
console.log(meilleurEleve(eleves));
