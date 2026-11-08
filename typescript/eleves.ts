interface Eleve {
  nom: string;
  note: number;
}
const eleves: Eleve[] = [
  { nom: "Hawa", note: 15 },
  { nom: "Moussa", note: 9 },
  { nom: "Fanta", note: 17 },
  { nom: "Ibrahima", note: 12 },
];
function moyenneEleves(liste: Eleve[]): number {
  let som = 0;
  for (let i = 0; i < liste.length; i++) {
    som = som + liste[i].note;
  }
  return som / liste.length;
}
console.log(moyenneEleves(eleves));

function meilleurEleves(liste: Eleve[]) {
  let noteI = liste[0];
  for (let i = 0; i < liste.length; i++) {
    if (liste[i].note >= noteI.note) {
      noteI = liste[i];
    }
  }
  return noteI;
}
console.log(meilleurEleves(eleves).nom);
