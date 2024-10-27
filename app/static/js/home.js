// Função para abrir o modal
function  abrir_modal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block"; // Exibe o modal
}

// Função para fechar o modal
function fecharModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none"; // Oculta o modal
}

// verificar token e executar algumas funcoes aparti do token que significa que o user tem uma conta
function checkLogin() {
    var sessionToken = localStorage.getItem('sessionToken'); 
    if (!sessionToken) {
        alert('desculpe token nao encontrado isso significa que vc nao tem uma conta ...')
        window.location.href = '/tela_login'; // Redireciona para a página de login
    }
    if (sessionToken){
        document.getElementById('entrar-gooogle').style.display = "none";

        function icone_modal_style(){
            if (window.innerWidth <= 768) { // Verifica se a largura da tela 
                document.getElementById('icone-do-modal').style.display = "block";
             }else{
                document.getElementById('icone-do-modal').style.display = "none";
             }
        }
        window.onresize = icone_modal_style;
        window.onload = icone_modal_style;
    }
}
window.onload = checkLogin;


