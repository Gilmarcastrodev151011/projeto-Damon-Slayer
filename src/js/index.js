// passo 1 -dar um jeito de pegar o elemento html dos botões
const botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// passo 2 -  dar jeito de identificar o clique do usuario no botões

botoescarrossel.forEach((botao , indece  ) => {
    botao.addEventListener('click',() => {
        // passo 3 desmarcar o batão selecionado anterior
        newFunction();
        // passo 4 - marcar o botão clicado como se estivesse selecionado
        desativarBotaoSelecionado(botao);

        // passo 5 esconder a imagem anterior
        esconderImagemAtiva();

        // passo 6 fazer aparecer a image, de funfo correspondente ao botão clicado
        mostrarImagemDeFundo(indece);



    })
})


function mostrarImagemDeFundo(indece) {
    imagens[indece].classList.add('ativa');
}

function desativarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function newFunction() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

