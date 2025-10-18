 
const ul = document.getElementById("appertizer");
console.log(ul.childNodes)

const soup = document.querySelector("#soup").firstElementChild;
while (soup) {
  console.log(soup);
  soup = soup.nextElementSibling;
}



const frist = document.querySelector("#soup") || document.querySelector("#appetizer")
console.log(frist);
 
const fristall = document.querySelectorAll(".meat")
fristall.forEach((ele) => console.log(ele));



//Practice1
const addButton = document.getElementById('add')
addButton.addEventListener("click", () =>{
    box.classList.add('bordered');
})
 
const removeButton = document.getElementById('remove')
removeButton.addEventListener("click", () =>{
    box.classList.remove('bordered');
})
 
const toggleButton = document.getElementById('toggle');
toggleButton.addEventListener("click", () => {
    box.classList.toggle('bordered');
});



// practice2
const box = document.getElementById("box");
const buttons = document.querySelectorAll('button[data-color]');
 
buttons.forEach(button => {
  button.onclick = () => {
    box.style.backgroundColor = button.dataset.color;
    box.textContent = button.dataset.color.toUpperCase();
  };
});