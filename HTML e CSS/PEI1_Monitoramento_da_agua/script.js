  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
  
  import{
    getDatabase,
    ref,
    onValue
  } from
        "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";
  
    const firebaseConfig = {
        apiKey: "AIzaSyDj_jqctc70yQZ57uc-XatbPvw_tWRK3CI",
        authDomain: "monitoramento-ph.firebaseapp.com",
        databaseURL: "https://monitoramento-ph-default-rtdb.firebaseio.com",
        projectId: "monitoramento-ph",
        storageBucket: "monitoramento-ph.firebasestorage.app",
        messagingSenderId: "712911339308",
        appId: "1:712911339308:web:d5b6648a8afa5c36fe3689"
    };

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

  //Conecta ao Realtime Database
const database = getDatabase(app);

//variáveis
let ph = 7.0;
let energia = true;

// acesse o caminho "monitoramento" do meu banco 
const monitoramentoRef = ref(database, "monitoramento");

//quando os dados desse caminho forem carregados ou modificados, execute essa função.
onValue(monitoramentoRef, (snapshot) => {

    //Pega os dados
    const dados = snapshot.val();

    //Mostra os dados no console
    console.log("Dados recebidos:", dados);

});

//Constantes para o phmaximo e phminimo se estiver entre o valor tem ph aceitavel, agora se estiver fora pode está abaixo ou acima
const phMinimo = 6.5;
const phMaximo = 8.5;


// Função principal que atualiza todas as informações da tela
function atualizarSistema() {

    document.getElementById("valorPh").textContent = ph.toFixed(1);
    //"document.getElementById("valorPh")" -> busca no HTML o id="valorPh"
    //"textContent" significa alterar o texto do elemento e "ph.toFixed(1)" faz o número aparecer com casa decimal

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
        // ! -> significa negação
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


// Verifica os alertas 
function verificarAlertas() {

    //Aqui pegamos os elementos HTML que queremos modificar
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

        //alterando a aparencia do alerta    
        alerta.style.backgroundColor = "#fef3c7";
        alerta.style.color = "#92400e";

    } else {

        mensagem.textContent =
            "Sistema funcionando normalmente.";

        alerta.style.backgroundColor = "#dcfce7";
        alerta.style.color = "#166534";
    }
}


// Simulação do pH baixo
function simularPhBaixo() {

    ph = 5.5;

    atualizarSistema();
}


// Simulação do pH normal
function simularPhNormal() {

    ph = 7.2;

    atualizarSistema();
}


// Simulação da falta de energia
function simularFaltaEnergia() {

    energia = false;

    atualizarSistema();
}


// Simulação do retorno da energia
function simularEnergiaNormal() {

    energia = true;

    atualizarSistema();
}


// Inicializa o sistema
atualizarSistema();
