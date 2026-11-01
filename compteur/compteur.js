let compteur = 0;
const moins = document.querySelector("#moins");
const plus = document.querySelector("#plus");
const zero = document.querySelector("#zero");
const valeur = document.querySelector("#valeur");

//augmantation par 1
plus.addEventListener("click", function () {
  compteur = compteur + 1;
  valeur.textContent = compteur;
});
//diminition par 1
moins.addEventListener("click", function () {
  if (compteur > 0) {
    compteur = compteur - 1;
  }
  valeur.textContent = compteur;
});

//Remise à 0
zero.addEventListener("click", function () {
  compteur = 0;
  valeur.textContent = compteur;
});
