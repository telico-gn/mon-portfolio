function moyenn(notes) {
  let total = 0;
  let nbrNotes = 0;
  result = 0;
  for (let i = 0; i < notes.length; i++) {
    total = total + notes[i];
    nbrNotes = notes.length;
  }
  return (result = total / nbrNotes);
}
const notes = [15, 17, 10];
console.log(moyenn(notes));
