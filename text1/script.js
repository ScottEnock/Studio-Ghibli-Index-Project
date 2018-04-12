var xhr = new XMLHttpRequest();
xhr.open("GET", "https://ghibliapi.herokuapp.com/films/", true);

document.getElementById("buttons").addEventListener("click", clicked);

function clicked(){
  console.log("clicked");
  xhr.send();
  xhr.onload = function(){
    if(this.status == 200) {
      let castle = JSON.parse(this.responseText);
      let text = "";
      for(i in castle){
        text += "- " + castle[i].title + "<br>";
      }
     document.getElementById("movies").innerHTML = text + "<br><br>" + "There are " + castle.length + " Studio Ghibli Movies?!";
    }
  }
}
/*
xhr.onload = function() {
    if(this.status == 200){
        var castle = JSON.parse(this.responseText);
        document.getElementById("movies").innerHTML=castle[1].title + "<br>" +castle[1].description;
        }
    }
*/

let texts = document.getElementById("test").innerHTML.toLowerCase();
console.log(texts.includes("this is includes"));
console.log(texts);

let everything = document.querySelector(".everything");
everything.style.color="blue";
