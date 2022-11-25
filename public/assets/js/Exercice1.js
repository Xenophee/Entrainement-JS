
// Déclaration des variables
let passwordsSelect = document.querySelectorAll('input[type=password]');
let passwordSelect = document.getElementById('password');
let confirmPasswordSelect = document.getElementById('confirmPassword');
let btnSelect = document.getElementById('send');


// Déclaration de la fonction
function changeColorInput (event) {

    event.preventDefault();
    // On peut retirer les deux classes directement ici si on n'utilise pas de boucle après
    if (passwordSelect.value == confirmPasswordSelect.value) {
        for (let password of passwordsSelect) {
            password.classList.remove('wrong');
            password.classList.add('good');
        }
    } else {
        for (let password of passwordsSelect) {
            password.classList.remove('good');
            password.classList.add('wrong');
        }  
    }
}


// Déclaration de l'évènement
btnSelect.addEventListener('click', changeColorInput);
    // On peut utiliser l'event 'blur' aussi si on veut vérifier avant de cliquer sur le bouton












// let passwordsSelect = document.querySelectorAll('input[type=password]');


// passwordsSelect.forEach((input) => {
//     console.log(input)
//     btnSelect.addEventListener('click', (event) => {
//         if (input.value == input.value) {
//             input.classList.add('good')
//             console.log(input.value)
//         } else {
//             input.classList.add('wrong')
//         }
//         event.preventDefault();
//     })
// });