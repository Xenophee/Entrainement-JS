// Déclaration de la fonction
function duplic () {
    count++
    let divNode = document.createElement('div');
    let clone = document.getElementById("firstname").cloneNode(true);
    // Le true ou false détermine si on clone également les enfants
    clone.id = 'firstname' + count;
    clone.name = 'firstname' + count;
    clone.classList.add('mt-3');
    divNode.appendChild(clone);
    document.getElementById('firstnameField').appendChild(divNode);
}


// Déclaration des variables
let btnSelect = document.getElementById('more');
let count = 1;


// Déclaration de l'évènement
btnSelect.addEventListener('click', duplic);


