

let xhr = new XMLHttpRequest();
let url = "https://ghibliapi.vercel.app/" + "films";
xhr.open("GET", url , true);
xhr.send();


xhr.onload = function(){
    
  if (this.status == 200){
    let films = JSON.parse(this.responseText);
    films.forEach(function(film){
      document.querySelector("#output").innerHTML +=
      `
      <div class="content card-panel">
        <h2>${film.title} - ${film.release_date}</h2>
        <p>${film.description}</P>
        <h5>Director: <a href="https://en.wikipedia.org/wiki/${film.director}" target="_blank">${film.director}</a></h5>
        <h5>Rotten Tomatoes Score: ${film.rt_score}</h5>
      </div>
      `;
    })
  } else {
    console.log("Error!");
  }

};

let inputSelector = document.querySelector("#input");
inputSelector.addEventListener("keyup", filterNames);

function filterNames(){
  let inputValue = document.querySelector("#input").value.toUpperCase();
  let contentDiv = document.querySelector("#output");
  let content = contentDiv.querySelectorAll(".content");
  console.log(contentDiv);
  content.forEach(function(film){
    if(film.innerHTML.toUpperCase().includes(inputValue)){
      film.style.display = "";
    } else {
      film.style.display = "none";
    }
  })
}
