
// Déclaration des variables
let passwordsSelect = document.querySelectorAll('input[type=password]');
let passwordSelect = document.getElementById('password');
let confirmPasswordSelect = document.getElementById('confirmPassword');
let btnSelect = document.getElementById('send');


// Déclaration de la fonction
function changeBackgroundInput (event) {

    if (passwordSelect.value == confirmPasswordSelect.value) {
        for (let password of passwordsSelect) {
            password.classList.add('good');
          }
    } else {
        for (let password of passwordsSelect) {
            password.classList.add('wrong');
          }  
    }
    event.preventDefault();
}


// Déclaration de l'évènement
btnSelect.addEventListener('click', changeBackgroundInput);






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