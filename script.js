const bouton = document.querySelector("#bouton");
const message = document.querySelector("#message");
bouton.addEventListener("click", function () {
  message.textContent = "Tu as cliqué !";
});
