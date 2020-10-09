/* add code after this comment */

const list = document.querySelector("#thumb-list");
const item = document.createElement("li");
const img = document.createElement("img");
img.setAttribute("src", "images/8710320515.jpg");
item.appendChild(img);
// list.appendChild(item);
list.insertAdjacentElement('afterbegin',img);
document.querySelector("#thumb-list li:last-child").remove();