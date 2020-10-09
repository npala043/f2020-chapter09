/* add code after this comment */

document.addEventListener("DOMContentLoaded", function () {
    const panels = document.querySelectorAll(".panels .panel");
    for (let panel of panels) {
        panel.addEventListener("click", function () {
            this.classList.toggle("open");
        });
    }
});