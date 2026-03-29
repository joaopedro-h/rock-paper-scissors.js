function jogo(jogadaUsuario) {
    
    opcoes = ["Pedra", "Papel", "Tesoura"];
    let jogadaMaquina = opcoes[Math.floor(Math.random() * opcoes.length)];

    let resultado;

    if (jogadaMaquina === jogadaUsuario) {
        resultado = "Empate."

    }else if (
        (jogadaUsuario === "Pedra" && jogadaMaquina === "Tesoura") ||
        (jogadaUsuario === "Tesoura" && jogadaMaquina === "Papel") ||
        (jogadaUsuario === "Papel" && jogadaMaquina === "Pedra") 
    ) {
        resultado = "Você ganhou!"

    }else{
        resultado = "Você perdeu!"
    }
    
    document.getElementById("jogadaUsuario").textContent = "Jogada do usuário: " + jogadaUsuario;
    document.getElementById("jogadaMaquina").textContent = "Jogada do computador: " + jogadaMaquina;
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
    
}

const botaoPedra = document.getElementById("pedra");
const botaoPapel = document.getElementById("papel");
const botaoTesoura = document.getElementById("tesoura");

botaoPedra.addEventListener("click", () => jogo("Pedra"));
botaoPapel.addEventListener("click", () => jogo("Papel"));
botaoTesoura.addEventListener("click", () => jogo("Tesoura"));