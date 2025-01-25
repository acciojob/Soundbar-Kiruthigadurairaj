const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

        const buttonsContainer = document.getElementById("buttons");

        // Function to stop all sounds
        const stopAllSounds = () => {
            const audioElements = document.querySelectorAll("audio");
            audioElements.forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
            });
        };

        // Dynamically create buttons for each sound
        sounds.forEach(sound => {
            const button = document.createElement("button");
            button.className = "btn";
            button.textContent = sound;

            button.addEventListener("click", () => {
                stopAllSounds();
                const audio = new Audio(`sounds/${sound}.mp3`);
                audio.play();
            });

            buttonsContainer.appendChild(button);
        });

        // Create the stop button
        const stopButton = document.createElement("button");
        stopButton.className = "btn stop";
        stopButton.textContent = "stop";

        stopButton.addEventListener("click", stopAllSounds);

        buttonsContainer.appendChild(stopButton);
   