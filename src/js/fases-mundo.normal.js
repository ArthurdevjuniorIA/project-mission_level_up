document.addEventListener('DOMContentLoaded', () => {

    const quizButtons = document.querySelectorAll('.quiz-btn');

    quizButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parentOptions = button.parentElement;
            
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
    const avatarEscolhido = dados.get('avatar') || 'dustin';
    const nivelAtual = Number(dados.get('nivel') || 0);

    const irNorFase2 = document.getElementById('ir-nor-fase2');
    const irNorFase3 = document.getElementById('ir-nor-fase3');
    const irNorFase4 = document.getElementById('ir-nor-fase4');
    const irNorFase5 = document.getElementById('ir-nor-fase5');
    const irNorFase6 = document.getElementById('ir-nor-fase6');
    const irFinalNormal = document.getElementById('ir-finalnormal');

    if (irNorFase2) {
        irNorFase2.addEventListener('click', () => {
            window.location.href = '../mundo-normal.html?avatar=' + avatarEscolhido + '&nivel=1';
        });
    }

    else if (irNorFase3) {
        irNorFase3.addEventListener('click', () => {
            window.location.href = '../mundo-normal.html?avatar=' + avatarEscolhido + '&nivel=2';
        });
    }

    else if (irNorFase4) {
        irNorFase4.addEventListener('click', () => {
            window.location.href = '../mundo-normal.html?avatar=' + avatarEscolhido + '&nivel=3';
        });
    }

    else if (irNorFase5) {
        irNorFase5.addEventListener('click', () => {
            window.location.href = '../mundo-normal.html?avatar=' + avatarEscolhido + '&nivel=4';
        });
    }

    else if (irNorFase6) {
        irNorFase6.addEventListener('click', () => {
            window.location.href = 'nor-fase6.html?avatar=' + avatarEscolhido + '&nivel=5';
        });
    }

    else if (irFinalNormal) {
        irFinalNormal.addEventListener('click', () => {
            window.location.href = '../finals/final' + avatarEscolhido + '.html?avatar=' + avatarEscolhido;
        });
    }

});