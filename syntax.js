// Get the color elements
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
const white = document.querySelector('.white');

// Add click event listeners to the color elements
red.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
});

blue.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
});

yellow.addEventListener('click', () => {
    document.body.style.backgroundColor = 'yellow';
});

green.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
});

white.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
})

// Get the color elements
const colorBoxes = document.querySelectorAll('.color div');

// Create a variable to store the currently playing audio element
let currentAudio = null;

// Add click event listeners to the color elements
colorBoxes.forEach(colorBox => {
    const audio = colorBox.querySelector('audio');
    let isPlaying = false;

    colorBox.addEventListener('click', () => {
        if (currentAudio && currentAudio !== audio) {
            // Pause the currently playing audio
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentAudio.parentElement.classList.remove('clicked');
            isPlaying = false;
        }

        if (!isPlaying) {
            // Play the clicked audio
            audio.play();
            colorBox.classList.add('clicked');
            isPlaying = true;
            currentAudio = audio;
        } else {
            // Pause the clicked audio
            audio.pause();
            audio.currentTime = 0;
            colorBox.classList.remove('clicked');
            isPlaying = false;
            currentAudio = null;
        }
    });
});