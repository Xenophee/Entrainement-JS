
// Déclaration des variables
let btnSelect = document.getElementById('send');

let noteOne = document.getElementById('noteOne');
let noteTwo = document.getElementById('noteTwo');
let noteThree = document.getElementById('noteThree');
let noteFour = document.getElementById('noteFour');
let noteFive = document.getElementById('noteFive');

let resultSelect = document.getElementById('result');


// Déclaration de la fonction
function averageCalc (event) {
    let addition = Number(noteOne.value) + Number(noteTwo.value) + Number(noteThree.value) + Number(noteFour.value) + Number(noteFive.value);
    let average = addition/5;
    event.preventDefault();

    if (average > 20) {
        resultSelect.textContent = `La moyenne de l'élève est de ${average}. C'était Dieu ? Ou c'est juste du troll ? Petit con !`
    } else if (average >= 15) {
        resultSelect.textContent = `Félicitation ! La moyenne de l'élève est de ${average}. On tient notre futur Montaigne !`;
    } else if (average <15 && average >= 12) {
        resultSelect.textContent = `La moyenne de l'élève est de ${average}. Il n'y aura pas de hontoscope à Noël, l'honneur est sauf !`;
    } else if (average <12 && average >=10) {
        resultSelect.textContent = `La moyenne de l'élève est de ${average}. Va falloir faire mieux ou un petit tour chez Brigitte va s'imposer !`;
    } else {
        resultSelect.textContent = `La moyenne de l'élève est de ${average}. Au gnouf !`;
    }
}


// Déclaration de l'évènement
btnSelect.addEventListener('click', averageCalc);












// let inputNumber = document.querySelectorAll('input[type=number]');


// console.log(inputNumber)

// btnSelect.addEventListener('click', (event) => {
//     inputNumber.forEach(element => {
//         console.log(element.value);
//         event.preventDefault();
//     })
// })