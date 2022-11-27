// Déclaration de la fonction
function averageCalc (event) {

    event.preventDefault();
    let addition2 = 0;

    // On fait une boucle pour additionner toutes les notes
    inputSelect.forEach(element => {
        addition2 = addition2 + Number(element.value);
    });

    // On divise tout ça par le nombre d'input
    let average = addition2 / inputSelect.length;


    // Message particulier à l'utilisateur pour la moyenne donnée
    if (average > 20) {
        resultSelect.textContent = `La moyenne de l'élève est de ${average} /20. C'était Dieu ? Ou c'est juste du troll ? Bouffon !`
    } else if (average >= 15) {
        resultSelect.textContent = `Félicitation ! La moyenne de l'élève est de ${average} /20. On tient notre futur Montaigne !`;
    } else if (average <15 && average >= 12) {
        resultSelect.textContent = `La moyenne de l'élève est de ${average}/20. Il n'y aura pas de hontoscope à Noël, l'honneur est sauf !`;
    } else if (average <12 && average >=10) {
        resultSelect.textContent = `La moyenne de l'élève est de ${average}/20. Va falloir faire mieux ou un petit tour chez Brigitte va s'imposer !`;
    } else {
        resultSelect.textContent = `La moyenne de l'élève est de ${average}/20. Au gnouf !`;
    }
}


// Déclaration des variables
let inputSelect = document.querySelectorAll('input[type=number]');
let btnSelect = document.getElementById('send');

let resultSelect = document.getElementById('result');


// Déclaration de l'évènement
btnSelect.addEventListener('click', averageCalc);
