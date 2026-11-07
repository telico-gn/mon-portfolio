let compteur = 0;
const valeur = document.querySelector("#valeur");
const moins = document.querySelector("#moins");
const zero = document.querySelector("#zero");
const plus = document.querySelector("#plus");
const notification = document.querySelector("#notification");

plus.addEventListener("click", function () {
  compteur = compteur + 1;
  valeur.textContent = compteur;
  notification.textContent = "";
});
moins.addEventListener("click", function () {
  if (compteur > 0) {
    compteur = compteur - 1;
  }
  valeur.textContent = compteur;
  notification.textContent = "";
});
zero.addEventListener("click", function () {
  compteur = 0;
  valeur.textContent = compteur;
  notification.textContent = "Salut vous avez ramener le compteur à zero";
});
