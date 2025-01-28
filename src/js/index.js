const btnVoltar = document.getElementById(`btn-voltar`);
const btnAvancar = document.getElementById(`btn-avancar`);
const cartoes = document.querySelectorAll(`.cartao`);
let cartaoAtual = 0;

btnAvancar.addEventListener(`click`, function() {
    if (cartaoAtual === cartoes.length -1)return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao();
})



btnVoltar.addEventListener(`click`, function() {
    if (cartaoAtual === 0)return;

    const cartoSelecionado = document.querySelector(`.selecionado`);
    cartoSelecionado.classList.remove(`selecionado`);

    cartaoAtual--;
    cartoes[cartaoAtual].classList.add(`selecionado`);
})

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add(`selecionado`);
}

function esconderCartaoSelecionado() {
    const cartoSelecionado = document.querySelector(`.selecionado`);
    cartoSelecionado.classList.remove(`selecionado`);
}

