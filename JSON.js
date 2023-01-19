 const root = document.querySelector('.root')
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   //JSON.parse()
//   .then(data => {
//     for(el of data){
//         root.insertAdjacentHTML('afterbegin',
//         `
//         <p>${el.title}</p>
//         `)
//     }
//   });
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((serverData) => {
    let item = serverData.slice(0, 5);

    for (elem of item) {
      root.insertAdjacentHTML(
        'afterbegin',
        `
        <div>
        <p>${elem.title}</p>
        <img src="${elem.url}" />
        </div>
        `

        
      )
      }
  })
