/* code goes here */
document.addEventListener('DOMContentLoaded', function () {

    const buttons = document.querySelectorAll(".card button");
    for (let btn of buttons) {
        btn.addEventListener('click', function () {
            alert("now just one handler");
        });
    }

    const images = document.querySelectorAll(".card img");
    for (let img of images) {
        img.addEventListener('mouseover', function (e) {
            e.target.classList.add('sepia');
        });
        img.addEventListener('mouseout', function (e) {
            e.target.classList.remove('sepia');
        });
    }

});