const clap = document.getElementById("clap")
const hihat = document.getElementById("hihat")
const kick = document.getElementById("kick")
const openhat = document.getElementById("openhat")
const boom = document.getElementById("boom")
const ride = document.getElementById("ride")
const snare = document.getElementById("snare")
const tom = document.getElementById("tom")
const tink = document.getElementById("tink")

function playSound(keyCode) {
    const sound = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (!sound) return;

    sound.play();
}

window.addEventListener('keydown', function(event) {
    if (event.keyCode === 65) {   
        playSound(65);
    }
    if (event.keyCode === 83) {   
        playSound(83);
    }
    if (event.keyCode === 68) {   
        playSound(68);
    }
    if (event.keyCode === 70) {   
        playSound(70);
    }
    if (event.keyCode === 71) {   
        playSound(71);
    }
    if (event.keyCode === 72) {   
        playSound(72);
    }
    if (event.keyCode === 74) {   
        playSound(74);
    }
    if (event.keyCode === 75) {   
        playSound(75);
    }

    if (event.keyCode === 76) {   
        playSound(76);
    }
});

