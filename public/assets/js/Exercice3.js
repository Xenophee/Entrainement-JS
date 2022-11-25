
btnSelect = document.getElementById('more');
let count = 1;


function duplic () {
    count++
    let divNode = document.createElement('div');
    let clone = document.getElementById("firstname").cloneNode(true);
    clone.id = 'firstname' + count;
    clone.classList.add('mt-3');
    divNode.appendChild(clone);
    document.getElementById('firstnameField').appendChild(divNode);
}


btnSelect.addEventListener('click', duplic);













// -------------------------------------------------------------------------

// Pour le fun sans histoire de clonage

// function duplic () {
//     let divNode = document.createElement('div');
//     let textDiv = document.createTextNode('Fait chié cet exo');

//     divNode.appendChild(textDiv);
//     document.getElementById('firstnameField').appendChild(divNode);
// }


// btnSelect.addEventListener('click', duplic)
