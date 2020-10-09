/* code goes here */

document.addEventListener("DOMContentLoaded", function () {
    // when key is pressed play a sound if correct key
    document.addEventListener('keydown', playSound);

    // to remove the box around the div for the key, we will listen
    // for any transition-end event (in this case, used by the .key
    // class elements)
    const keys = document.querySelectorAll('.key');
    for (let key of keys) {
        key.addEventListener('transitionend', removeTransition)
    }

    function removeTransition(e) {
        // skip if not a transform transition
        if (e.propertyName !== 'transform') return;
        // right transition so remove the .playing class from .key
        this.classList.remove('playing');
    }

    function playSound(e) {
        // first determine the key that was pressed from event
        const keyPressed = e.key;
        // select the <audio> element for the pressed key
        const audio =
            document.querySelector(
                `audio[data-key="${keyPressed}"]`);
        // if key doesn't have <audio> element then exit
        if (!audio) return;
        // select the <div> element corresponding to the pressed key
        const div =
            document.querySelector(
                `div.key[data-key="${keyPressed}"]`);

        // add glowing box class to it
        div.classList.add('playing');
        audio.play();
    }
});