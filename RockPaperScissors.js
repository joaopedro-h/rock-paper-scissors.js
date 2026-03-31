/* Variáveis definidas fora da função para que a contagem não fosse zerada toda vez que fosse feito alguma jogada. */
let vitorias = 0;
let derrotas = 0;
let empates = 0;

function jogo(jogadaUsuario) {
    
    let opcoes = ["Pedra", "Papel", "Tesoura"];
    let jogadaMaquina = opcoes[Math.floor(Math.random() * opcoes.length)];
    let resultado;

    if (jogadaMaquina === jogadaUsuario) {
        resultado = "Empate."
        empates++;

    }else if (
        (jogadaUsuario === "Pedra" && jogadaMaquina === "Tesoura") ||
        (jogadaUsuario === "Tesoura" && jogadaMaquina === "Papel") ||
        (jogadaUsuario === "Papel" && jogadaMaquina === "Pedra") 
    ) {
        resultado = "Você ganhou!"
        vitorias++;

    }else{
        resultado = "Você perdeu!"
        derrotas++;
    }
    
    document.getElementById("jogadaUsuario").textContent = "Jogada do usuário: " + jogadaUsuario;
    document.getElementById("jogadaMaquina").textContent = "Jogada do computador: " + jogadaMaquina;
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
    document.getElementById("vitorias").textContent = "Vitórias: " + vitorias;
    document.getElementById("derrotas").textContent = "Derrotas: " + derrotas;
    document.getElementById("empates").textContent = "Empates: " + empates;
    
}

const botaoPedra = document.getElementById("pedra");
const botaoPapel = document.getElementById("papel");
const botaoTesoura = document.getElementById("tesoura");

botaoPedra.addEventListener("click", () => jogo("Pedra"));
botaoPapel.addEventListener("click", () => jogo("Papel"));
botaoTesoura.addEventListener("click", () => jogo("Tesoura"));


