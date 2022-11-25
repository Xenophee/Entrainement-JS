// Déclaration des variables sur les RegExp
const RegLettres = new RegExp('^[a-zA-Z]+$');
const RegNum = new RegExp('^[0-9]+$');
const RegMail = new RegExp('([_A-Za-z0-9-]+)(\.[_A-Za-z0-9-]+)@([A-Za-z0-9]+)(\.[A-Za-z0-9]+)');


// Déclaration des variables pour saisir chaque input
let btnSelect = document.getElementById('send');

let lastnameSelect = document.getElementById('lastname');
let firstnameSelect = document.getElementById('firstname');
let emailSelect = document.getElementById('email');
let ageSelect = document.getElementById('age');


// Déclaration des variables pour les div contenant le texte
let lastnameSelectError = document.getElementById('lastnameError');
let firstnameSelectError = document.getElementById('firstnameError');
let emailSelectError = document.getElementById('emailError');
let ageSelectError = document.getElementById('ageError');


// Déclaration de la fonction
function verification (event) {

    // Test sur le nom
    if (!RegLettres.test(lastnameSelect.value)) {
        lastnameSelectError.classList.add('error')
    } else {
        lastnameSelectError.classList.remove('error')
    }
    
    // Test sur le prénom
    if (!RegLettres.test(firstnameSelect.value)) {
        firstnameSelectError.classList.add('error')
    } else {
        firstnameSelectError.classList.remove('error')
    }

    // Test sur l'email
    if (!RegMail.test(emailSelect.value)) {
        emailSelectError.classList.add('error')
    } else {
        emailSelectError.classList.remove('error')
    }

    // Test sur l'âge
    if (!RegNum.test(ageSelect.value)) {
        ageSelectError.classList.add('error')
    } else {
        ageSelectError.classList.remove('error')
    }

    // On empêche l'envoi du formulaire
    event.preventDefault();
}


// Déclaration de l'évènement
btnSelect.addEventListener('click', verification);

// --> refaire en mettant un event sur chaque input avec 'change' et utiliser les classes CSS pour rendre visible ou non