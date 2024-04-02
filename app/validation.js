function numberValidation(transcription) {
    const data = +transcription;

    if (transcription.toUpperCase() === 'GAME OVER') {
        document.body.innerHTML = `
            <h1 class="game__title">GAME OVER!</h1>
            <p class="container__tip">Você desistiu de jogar essa rodada</p>
            <button type="button" id="reload" class="btn">Jogar novamente</button>
        `;
        document.body.setAttribute('data-contexto', 'reset');
    } else if (isNaN(data)) {
        guess.innerHTML += `
            <p class="container__tip">Isso não é um número</p>
        `;
    } else if (data < lowNumber || data > (highNumber - 1)) {
        guess.innerHTML += `
            <p class="container__tip">Número fora do limite</p>
        `;
    } else {
        guessDisplay(data);
    }
}

function guessDisplay(transcription) {
    if (transcription < secretNumber) {
        guess.innerHTML += `
            <p class="container__tip">O número secreto é maior <i class="fa-solid fa-chevron-up"
            style="color: #eee4b1; margin-left: 0.2rem;"></i></p>
        `;
    } else if (transcription > secretNumber) {
        guess.innerHTML += `
            <p class="container__tip">O número secreto é menor <i class="fa-solid fa-chevron-down"
            style="color: #eee4b1; margin-left: 0.2rem;"></i></p>
        `;
    } else {
        document.body.innerHTML = `
            <h1 class="game__title">Você acertou!</h1>
            <p class="container__tip">O número secreto era ${transcription}<br>Recarregue a página para jogar de novo.</p>
            <button type="button" id="reload" class="btn">Jogar novamente</button>
        `;
        document.body.setAttribute('data-contexto', 'correct');
    }
}

document.body.addEventListener('click', (e) => {
    if (e.target.id == 'reload') {
        location.reload();
    }
})