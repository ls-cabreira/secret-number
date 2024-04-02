const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const activationButton = document.getElementById('talk-btn');
const guess = document.querySelector('.game__container');

let recognition = new SpeechRecognition();
recognition.lang = 'pt-br';

recognition.start();
userSpeech();
recognition.onend = () => recognition.start();


function userSpeech() {
    recognition.onresult = (event) => {
        const transcription = event.results[0][0].transcript;

        guess.innerHTML = `
            <p class="container__text">Você disse:</p>
            <div class="container__guess">
            <p class="guess__number">${transcription}</p>
            </div>
        `;
        numberValidation(transcription);
    }
}