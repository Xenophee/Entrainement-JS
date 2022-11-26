// Déclaration de la fonction
function duplic () {
    count++
    let divNode = document.createElement('div');
    let clone = document.getElementById("firstname").cloneNode(true);
    clone.id = 'firstname' + count;
    clone.name = 'firstname' + count;
    clone.classList.add('mt-3');
    // let cloneLabel = document.getElementById
    divNode.appendChild(clone);
    document.getElementById('firstnameField').appendChild(divNode);
}


// Déclaration des variables
let btnSelect = document.getElementById('more');
let count = 1;


// Déclaration de l'évènement
btnSelect.addEventListener('click', duplic);


