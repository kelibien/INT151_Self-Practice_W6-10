//-------------------1
console.log(window.document) //root node
console.log(document) //root node
console.log(typeof document)
console.log(document.getElementById("123"))
const htmlElement = document.documentElement
console.log(htmlElement)

console.log(htmlElement.parentElement) //null
console.log(htmlElement.parentNode) //root node
if (htmlElement.parentNode === document) {
  console.log("parent of html is a root node")
}

console.log(document.firstChild) //<!DOCTYPE html>
console.log(document.firstChild.nextSibling)
//<!-- sample comment #1 -->
console.log(document.firstChild.previousSibling) //null
console.log(document.firstElementChild) //<html>
console.log(document.firstElementChild.previousSibling) //<!-- sample comment #1 -->
console.log(document.lastChild) //<!-- sample comment #3 -->
console.log(document.lastElementChild) //<html lang="en">
 


//---------------------2
 //1. get all child nodes under <div id='123'>
const divElement = document.getElementById("123")

//2. get all node types children (return (static) NodeList, can use forEach)
const divChildNodes = divElement.childNodes
console.log(divChildNodes.length) //3
divChildNodes.forEach((child) => console.log(child))

//3. get only Element node type children (retunr (dynamic) HTMLCollection, cannot use forEach)
const divChildren = divElement.children
console.log(divChildren.length) //2
// for (let i = 0; i < divChildren.length; i++) {
//   console.log(divChildren[i])
// }
Array.from(divChildren).forEach((child) => console.log(child))
 
// 1. What is the node type of firstChild of root node?
console.log(document.firstChild.nodeType)
// 2. if node type is an HTML node, display "Hello, HTML node", otherwise ,display "Hello, any node"
if (document.firstChild.nodeType === 1) {
  console.log("Hello, HTML node")
} else {
  console.log("Hello, any node")
}  

//1. What is the node type of first child of root node
console.log(document.firstChild.nodeType)

//2. if node type is an element node, display "Hello, HTML node", otherwise, display "Hello, any node"
if (document.firstElementChild.nodeType === Node.ELEMENT_NODE)
  console.log("Hello, HTML node")
else console.log("Hello, any node")



//-------------------3
const div = document.getElementById("demo");
const p = document.createElement("p");
div.appendChild(p);
p.setAttribute("fomat","italic");
 
const Text1 = document.createElement("p");
htmlText.innerHTML = "<i>Sample ltalic Text<i>";
 
const Text2 = document.createElement("p");
textText.innerText = "<i>Sample Italic Text</i>";
 
const Text3 = document.createElement("p");
contentText.textContent = "<i>Sample Italic Text</i>";
 
const demoDiv = document.getElementById("demo");
demoDiv.appendChild(p);
demoDiv.appendChild(Text1);
demoDiv.appendChild(Text2);
demoDiv.appendChild(Text3);



//<p> ที่ตำแหน่งคู่เป็นสีแดง และตำแหน่งคี่เป็นสีน้ำเงิ
const ps = document.querySelectorAll('#textBox p')
ps.forEach((p, index) => {
  if ((index + 1) % 2 === 0) p.style.color = 'red'
  else p.style.color = 'blue'
})

//นับจำนวน <p> ภายใน <div id="container">
const container = document.getElementById('container')
const paragraphs = container.getElementsByTagName('p')
console.log(`จำนวน <p> ทั้งหมดคือ: ${paragraphs.length}`)

//สร้างปุ่ม “Add” ที่เมื่อกดแล้วจะเพิ่ม <li> ใหม่ใน <ul> พร้อมเลขลำดับต่อท้าย
const list = document.getElementById('list')
const addBtn = document.getElementById('addBtn')
let count = 0

addBtn.addEventListener('click', () => {
  count++
  const li = document.createElement('li')
  li.textContent = `Item ${count}`
  list.appendChild(li)
})

//สร้างปุ่ม “Show/Hide” ที่กดแล้วสลับการแสดงผลของ <p>
const msg = document.getElementById('message')
const btn = document.getElementById('toggleBtn')
btn.addEventListener('click', () => {
if (msg.style.display === 'none') {
  msg.style.display = 'block'
  btn.textContent = 'Hide'
  } else {
    msg.style.display = 'none'
    btn.textContent = 'Show'
  }
})
    
//ดึงเฉพาะ ข้อความจริง ๆ ใน <div> (ไม่เอาแท็ก HTML)
const info = document.getElementById('info')
onsole.log(info.textContent)