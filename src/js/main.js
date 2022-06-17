"use strict"

document.addEventListener('DOMContentLoaded',()=>{

const test = time => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time);
  });
}


Promise.all([test(2000), test(4000)]).then(() => {
  console.log("all promises DONE");
});

Promise.race([test(1000), test(4000)]).then(() => {
  console.log("RACE promises DONE");
});



// const testFetch = `https://api.tvmaze.com/search/shows?q=beauty`;

// const infoDiv = document.querySelector('#data-wrapper');

// const createTemplate = data => {
//   let genres = [];
//   if (data.show.genres.length){
//     genres = data.show.genres.reduce((acc,item)=>{
//       return acc + " ", + item;
//     })
//   }else {
//     genres = 'unknown';
//   }
//   return `
//     <div class="data-item">
//       <div class="image"><img src="${data.show.image ? data.show.image.medium: ''}" alt="poster"></div>
//       <div><span>Name:</span>${data.show.name}</div>
//       <div><span>Score:</span>${data.score}</div>
//       <div><span>Genres:</span>${genres}</div>
//       <div><span>Language:</span>${data.show.language}</div>
//       <div><span>Description:</span>${data.show.summary}</div>
//     </div>
//   `
// }

// fetch(testFetch)
//   .then(respose=> respose.json())
//   .then(data => {
//     if(data) {
//       data.forEach(item =>{
//         infoDiv.innerHTML += createTemplate(item);
//       })
//     }
//   })

//   createTemplate();
  
});