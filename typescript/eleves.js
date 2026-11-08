var eleves = [
    { nom: "Hawa", note: 15 },
    { nom: "Moussa", note: 9 },
    { nom: "Fanta", note: 17 },
    { nom: "Ibrahima", note: 12 },
];
function moyenneEleves(liste) {
    var som = 0;
    for (var i = 0; i < liste.length; i++) {
        som = som + liste[i].note;
    }
    return som / liste.length;
}
console.log(moyenneEleves(eleves));
function meilleurEleves(liste) {
    var noteI = liste[0];
    for (var i = 0; i < liste.length; i++) {
        if (liste[i].note >= noteI.note) {
            noteI = liste[i];
        }
    }
    return noteI;
}
console.log(meilleurEleves(eleves).nom);
