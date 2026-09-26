document.addEventListener('DOMContentLoaded', () => {

    // Lógica do Quiz no final das páginas
    const quizButtons = document.querySelectorAll('.quiz-btn');

    quizButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parentOptions = button.parentElement;
            
            // Bloqueia múltiplas tentativas na mesma pergunta
            const siblings = parentOptions.querySelectorAll('.quiz-btn');
            siblings.forEach(sibling => {
                sibling.style.pointerEvents = 'none';
            });

            const isCorrect = button.getAttribute('data-correct') === 'true';

            if (isCorrect) {
                button.classList.add('correct');
                button.innerHTML += ' <strong>✓ Resposta Correta!</strong>';
            } else {
                button.classList.add('wrong');
                button.innerHTML += ' <strong>✕ Resposta Incorreta!</strong>';
            }
        });
    });

    const dados = new URLSearchParams(window.location.search);
    const avatarEscolhido = dados.get('avatar');
    const nivelAtual = Number(dados.get('nivel') || 0);

    const irInverFase2 = document.getElementById('ir-inver-fase2');
    const irInverFase3 = document.getElementById('ir-inver-fase3');
    const irInverFase4 = document.getElementById('ir-inver-fase4');
    const irInverFase5 = document.getElementById('ir-inver-fase5');
    const irFinalInvertido = document.getElementById('ir-finalinvertido');

    if (irInverFase2) {
        irInverFase2.addEventListener('click', () => {
            window.location.href = '../mundo-invertido.html?avatar=' + avatarEscolhido + '&nivel=1';
        });
    }
    else if (irInverFase3) {
        irInverFase3.addEventListener('click', () => {
            window.location.href = '../mundo-invertido.html?avatar=' + avatarEscolhido + '&nivel=2';
        });
    }
    else if (irInverFase4) {
        irInverFase4.addEventListener('click', () => {
            window.location.href = '../mundo-invertido.html?avatar=' + avatarEscolhido + '&nivel=3';
        });
    }
    else if (irInverFase5) {
        irInverFase5.addEventListener('click', () => {
            window.location.href = '../mundo-invertido.html?avatar=' + avatarEscolhido + '&nivel=4';
        });
    }
    else if (irFinalInvertido) {
        irFinalInvertido.addEventListener('click', () => {
            window.location.href = '../finals/finalinverse.html?avatar=' + avatarEscolhido;
        });
    }
});