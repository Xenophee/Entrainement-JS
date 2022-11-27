
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
            password.classList.remove('border-danger');
            password.classList.add('border-success');
        }
    } else {
        for (let password of passwordsSelect) {
            password.classList.remove('border-success');
            password.classList.add('border-danger');
        }  
    }
}


// Déclaration de l'évènement
btnSelect.addEventListener('click', changeColorInput);
    // On peut utiliser l'event 'blur' aussi si on veut vérifier avant de cliquer sur le bouton





    // A la place de la boucle For, on peut faire un forEach ou juste reprendre les id des différents inputs
    
    /* passwordsSelect.forEach(element => {
        element.classList.remove('border-danger');
        element.classList.add('border-success');
    }); */