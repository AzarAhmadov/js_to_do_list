let addTodo = document.querySelector("#add");
let clear = document.querySelector("#clear");
let text = document.querySelector("#text");
let inputtext = document.querySelector("#input-text");

addTodo.addEventListener("click", function () {
  let paragraf = document.createElement("p");
  paragraf.classList.add("paragraf-style");
  inputtext.appendChild(paragraf);
  paragraf.innerHTML = text.value;
  text.value = "";
  
  paragraf.addEventListener("click", function () {
    paragraf.style.textDecoration = "line-through";
  });

  paragraf.addEventListener("dblclick", function () {
    inputtext.removeChild(paragraf);
  });

  clear.addEventListener("click" , function(){
    paragraf.remove();
  })
});
