const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultados = document.querySelector(".texto-resultados");
const botaoJogarNovamente = document.querySelector(".novamente-botao");
const telaInicial = document.querySelector(".tela-inicial");
const botaoIniciar = document.querySelector(".iniciar-botao");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click,iniciaJogo');
function iniciaJogo (){
    atual = 0;
    historiaFinal = "";
    telaInicial.computedStyleMap.display = 'none';
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultados.classList.remove("mostrar");
    mostraPergunta();
}

function mostraPergunta (){
    if (atual >= perguntas.lenght){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaResultados.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
    function mostraAfirmacoes (){
        for(const afrimacoes of perguntaAtual.afrimacoes){

        }
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afrimacoes = aleatorio(opcaoSelecionada.afimacao);
    historiaFinal += afrimacoes + "";
    if (opcaoSelecionada.proxima !== undefined){
        atual = opcaoSelecionada.proxima; 
    }else{
        mostraResultado();
        return;
    }
    mostraPergunta();
}