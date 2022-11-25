let scrollPosition = 0;
let ticking = false;

let containerDiv = document.getElementById('addImg');

// function faireQuelqueChose(position_scroll) {
//   // faire quelque chose avec la position du scroll
//   let divNode = document.createElement('div');
//   divNode.classList.add('adding', 'col-6', 'mb-3');
//   document.getElementById('addImg').appendChild(divNode);
// }

// containerDiv.addEventListener('scroll', function(e) {
//   scrollPosition = containerDiv.scrollY;

//   if (!ticking) {
//     containerDiv.requestAnimationFrame(function() {
//       faireQuelqueChose(scrollPosition);
//       ticking = false;
//     });
//   }

//   ticking = true;
// });



function faireQuelqueChose(position_scroll) {
    // faire quelque chose avec la position du scroll
    let divNode = document.createElement('div');
    divNode.classList.add('adding', 'col-6', 'mb-3');
    document.getElementById('addImg').appendChild(divNode);
  }
  
  window.addEventListener('scroll', function(e) {
    scrollPosition = window.scrollY;
  
    if (!ticking) {
      window.requestAnimationFrame(function() {
        faireQuelqueChose(scrollPosition);
        ticking = false;
      });
    }
  
    ticking = true;
  });

