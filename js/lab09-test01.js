/* add code after this comment */

document.getElementById("thumb-list").style.border = "1px solid black";

const p = document.querySelector("p").textContent;
document.querySelector("textArea").value = p;

let imgs = document.querySelectorAll("ul img");
for (let img of imgs) {
    img.style.boxShadow = "3px 3px 5px grey";
}

