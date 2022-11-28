// Déclaration des fonction
function duplicImage(numImages = 10) {
  let count=0;
  while(count < numImages){
    
    createImage();
    }
  count++;
  }   
  

function getUrl (height, width) {
  let generateId = Math.floor(Math.random()*(1000 -0) + 0);
  return `https://picsum.photos/id/${generateId}/${width}/${height}`;
}

function createImage () {
  let imgNode = document.createElement('img');
  imgNode.src = getUrl(300, 200);
  imgNode.classList.add('img-fluid', 'mb-5', 'mx-1', 'adding', 'col-lg-3');
  document.getElementById('addImg').appendChild(imgNode);
}

// Déclaration des variables
let containerDiv = document.getElementById('addImg');





// Déclaration de l'évènement
window.addEventListener('scroll', createImage);

// window.addEventListener('scroll',()=>{
//   console.log(window.scrollY) //scrolled from top
//   console.log(window.innerHeight) //visible part of screen
//   if(window.scrollY + window.innerHeight >= 
//   document.documentElement.scrollHeight){
//   duplicImage();
//   }
// })
