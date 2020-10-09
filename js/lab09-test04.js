/* add code after this comment */

document.addEventListener("DOMContentLoaded", function () {

    const img = document.querySelector("#imgManipulated img");

    // Thumbnail images
    const thumbnails = document.querySelectorAll("#thumbBox div img");
    for (let thumb of thumbnails) {
        thumb.addEventListener("click", function () {
            // Change image (get medium instead of small size)

            img.setAttribute("src", `images/medium/${thumb.getAttribute("src").substring(13)}`);
            // Change info
            const em = document.querySelector("figcaption em");
            const span = document.querySelector("figcaption span");
            em.textContent = thumb.alt;
            span.textContent = thumb.title;
        });
    }

    // Sliders
    // Default filter values
    let filters = [100, 100, 100, 0, 0, 0];

    // filter array
    function applyFilters() {
        img.style.filter = `opacity(${filters[0]}) `
        img.style.filter += `saturate(${filters[1]}%) `
        img.style.filter += `brightness(${filters[2]}%) `
        img.style.filter += `hue-rotate(${filters[3]}deg) `
        img.style.filter += `grayscale(${filters[4]}%) `
        img.style.filter += `blur(${filters[5]}px)`
    }

    // Filter event listener (event delegated)
    const form = document.querySelector("#sliderBox form");
    form.addEventListener("input", function (e) {
        switch (e.target.id) {
            case "sliderOpacity":
                filters[0] = e.target.value / e.target.max;
                document.querySelector("#numOpacity").textContent = e.target.value;
                break;
            case "sliderSaturation":
                filters[1] = e.target.value;
                document.querySelector("#numSaturation").textContent = e.target.value;
                break;
            case "sliderBrightness":
                filters[2] = e.target.value;
                document.querySelector("#numBrightness").textContent = e.target.value;
                break;
            case "sliderHue":
                filters[3] = e.target.value;
                document.querySelector("#numHue").textContent = e.target.value;
                break;
            case "sliderGray":
                filters[4] = e.target.value;
                document.querySelector("#numGray").textContent = e.target.value;
                break;
            case "sliderBlur":
                filters[5] = e.target.value;
                document.querySelector("#numBlur").textContent = e.target.value;
                break;
            default:
                alert("Unknown input triggered event listener");
        }
        applyFilters();
    });

    // Reset button
    const reset = document.querySelector("#resetFilters");
    reset.addEventListener("click", function () {
        img.style.filter = "none";
        document.querySelector("#sliderBox form").reset();
        const spans = document.querySelectorAll("form span");
        for (let span of spans) {
            switch (span.id) {
                case "numOpacity":
                case "numSaturation":
                case "numBrightness":
                    span.textContent = 100;
                    break;
                case "numHue":
                case "numGray":
                case "numBlur":
                    span.textContent = 0;
                    break;
            }
        }
    });

});