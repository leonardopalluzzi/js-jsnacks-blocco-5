const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

let studentClass;
for(let i = 0; i < students.length; i++){
  const thisEl = students[i];
  if(thisEl.name.toLocaleLowerCase() == 'marco lanci'){
    studentClass = thisEl.class;
    break;
  }
}

console.log(studentClass);


const studentClassFind = students.find(student => student.name.toLocaleLowerCase() == 'marco lanci').class;

console.log(studentClassFind);
