// see https://imagekit.io/blog/lazy-loading-images-complete-guide/
// see https://codepen.io/imagekit_io/pen/MBNwKB


document.addEventListener("DOMContentLoaded", function () {
    // lazy class indicates images to be loaded eventually
    const images = document.querySelectorAll("img.lazy");
    // do lazy loading for scroll, resize, and orientation events
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);

    // flag used to indicate whether we should ignore event
    let lazyloadThrottleTimeout = false;

    function lazyload() {
        if (lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function () {
            const scrollTop = window.pageYOffset;
            for (let img of images) {
                // is this image visible?
                if (img.offsetTop < (window.innerHeight + scrollTop)) {
                    // yes, then sets its src property, which will make
                    // browser request image
                    img.src = img.dataset.src;
                    img.alt = img.dataset.alt;
                    // once it's loaded, no need to load again
                    img.classList.remove('lazy');
                }
            }
            // if all images are loaded, no need for this handler anymore
            if (images.length == 0) {
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange",
                    lazyload);
            }
        }, 20);
    }
});
