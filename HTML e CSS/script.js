let ph = 7.0;
let energia = true;

const phMinimo = 6.5;
const phMaximo = 8.5;


// Atualiza todas as informações da tela
function atualizarSistema() {

    document.getElementById("valorPh").textContent = ph.toFixed(1);


    // Verificação do pH
    if (ph < phMinimo || ph > phMaximo) {

        document.getElementById("statusPh").textContent =
            "pH fora da faixa aceitável";

    } else {

        document.getElementById("statusPh").textContent =
            "pH dentro da faixa aceitável";
    }


    // Verificação da energia
    if (energia) {

        document.getElementById("statusEnergia").textContent = "OK";

        document.getElementById("energiaMensagem").textContent =
            "Energia elétrica disponível";

    } else {

        document.getElementById("statusEnergia").textContent =
            "FALTA DE ENERGIA";

        document.getElementById("energiaMensagem").textContent =
            "Energia elétrica indisponível";
    }


    // Verificação da oxigenação
    if (!energia) {

        document.getElementById("statusOxigenacao").textContent =
            "ATIVADA";

        document.getElementById("oxigenacaoMensagem").textContent =
            "Oxigenação de emergência ativada";

    } else {

        document.getElementById("statusOxigenacao").textContent =
            "DESLIGADA";

        document.getElementById("oxigenacaoMensagem").textContent =
            "Sistema funcionando normalmente";
    }


    verificarAlertas();
}


// Verifica se existe algum problema
function verificarAlertas() {

    const alerta = document.getElementById("alerta");
    const mensagem = document.getElementById("mensagemAlerta");

    if (ph < phMinimo || ph > phMaximo) {

        mensagem.textContent =
            `⚠️ pH fora da faixa aceitável. Valor atual: ${ph.toFixed(1)}`;

        alerta.style.backgroundColor = "#fee2e2";
        alerta.style.color = "#991b1b";

    } else if (!energia) {

        mensagem.textContent =
            "⚡ Falta de energia detectada. Oxigenação de emergência ativada.";

        alerta.style.backgroundColor = "#fef3c7";
        alerta.style.color = "#92400e";

    } else {

        mensagem.textContent =
            "Sistema funcionando normalmente.";

        alerta.style.backgroundColor = "#dcfce7";
        alerta.style.color = "#166534";
    }
}


// Simula pH baixo
function simularPhBaixo() {

    ph = 5.5;

    atualizarSistema();
}


// Simula pH normal
function simularPhNormal() {

    ph = 7.2;

    atualizarSistema();
}


// Simula falta de energia
function simularFaltaEnergia() {

    energia = false;

    atualizarSistema();
}


// Simula retorno da energia
function simularEnergiaNormal() {

    energia = true;

    atualizarSistema();
}


// Inicializa o sistema
atualizarSistema();
