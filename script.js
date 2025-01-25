document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const buttons = document.querySelectorAll('.btn');
    const stopButton = document.querySelector('.stop');

    // Play sound when a button is clicked
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const soundFile = button.getAttribute('data-sound');
            audioPlayer.src = `sounds/${soundFile}`; // Ensure the sound files are in a "sounds" folder
            audioPlayer.play();
        });
    });

    // Stop the sound
    stopButton.addEventListener('click', () => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    });
});
