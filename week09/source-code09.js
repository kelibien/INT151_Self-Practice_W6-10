const divElement = document.querySelector("div");
 
divElement.addEventListener("click", (event) => {
  console.log("event.target:", event.target);
  if (event.target.tagName === "BUTTON") {
    console.log("Button was clicked!");
  } else if (event.target.tagName === "DIV") {
    console.log("Div was clicked!");
  }
});



document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is ready!')
  const heading = document.createElement('h2')
  heading.textContent = 'This was added when DOM was ready!'
  document.body.appendChild(heading)
  console.log('Heading added now.')
})
window.addEventListener('load', () => {
  console.log('All resources (images, CSS, scripts) are fully loaded!')
  console.log('Page is fully loaded')
})
 


const inputBox = document.getElementById('inputBox');
const keyLog = document.getElementById('keyLog');
 
inputBox.addEventListener('keydown', function(event) {
const p = document.createElement('p');
 if (event.key === 'Enter') {
    p.style.color = 'blue';
    p.textContent = 'You pressed: Enter';
  } else {
    p.style.color = 'black';
    p.textContent = 'You pressed: ' + event.key;
  }
  keyLog.appendChild(p);
});



const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const msg = document.querySelector("p");
 
form.addEventListener("submit", (e) => {
  e.preventDefault();
 
 
  msg.textContent = "";
  msg.removeAttribute("class");
 
 
  const data = {};
  inputs.forEach((input) => {
    data[input.id] = input.value.trim();
  });
 
  const hasEmpty = Object.values(data).some((v) => v === "");
  if (hasEmpty) {
    msg.textContent = "Please fill in all fields!";
    msg.classList.add("error");
    msg.style.color = "red";
    return;
  }
 
  if (data.password !== data["confirm-password"]) {
    msg.textContent = "Passwords do not match, please try again.";
    msg.classList.add("error");
    msg.style.color = "red";
    return;
  }
 
  msg.textContent = "Account created successfully!";
  msg.classList.add("success");
  msg.style.color = "green";
 
});



const btn = document.getElementById('countBtn');
const display = document.getElementById('countDisplay');
let count = 0;
btn.addEventListener('click', () => {
  count++;
  display.textContent = `You clicked ${count} times`;
});

const box = document.getElementById('colorBox');
box.addEventListener('mouseover', () => {
  box.style.backgroundColor = 'yellow';
});
box.addEventListener('mouseout', () => {
  box.style.backgroundColor = 'lightgray';
});

const box2 = document.getElementById('textBox');
const counter = document.getElementById('charCount');
box.addEventListener('input', () => {
  counter.textContent = `Characters: ${box2.value.length}`;
});

const form = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const msg = document.getElementById('msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  if (!email.includes('@')) {
    msg.textContent = 'Invalid email address!';
    msg.style.color = 'red';
  } else {
    msg.textContent = 'Email looks good!';
    msg.style.color = 'green';
  }
}
