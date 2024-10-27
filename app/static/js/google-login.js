
function renderGoogleButton() {
    let googleSignInContainer = $("#googleSignIn");
    googleSignInContainer.html("");
    let w = googleSignInContainer.width();
    google.accounts.id.renderButton(
        googleSignInContainer[0],
        {
            theme: "outline",
            width: w,
        });
    }
$(document).ready(() => {
    google.accounts.id.initialize({
        client_id: '1036969604029-45km5v8pui2pskdp9jmlubpu0cj2mdq4.apps.googleusercontent.com',
        callback: handleCredentialResponse
    });
    renderGoogleButton(); 
});
window.addEventListener("resize", () => {
    renderGoogleButton(); 
});
function handleCredentialResponse(response) {
    try {
        const data = jwt_decode(response.credential);
        console.log('Decoded data:', data);

        // Exibir as informações do usuário na página
        document.getElementById('userPicture').src = data.picture;
        document.getElementById('userName').textContent =  `${data.name}`;
        document.getElementById('userEmail').textContent = `${data.email}`;
        document.getElementById('userInfo').style.display = 'block';  
        let wt = data.email_verified
        if ( wt === true) {
            document.getElementById('googleSignIn').style.display = "none";
        }else{
            return 'Email not verified'
        }

            // Enviar dados para o backend
        fetch('/auth/cadastrar_user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log('Resposta do servidor:', result);
        })
        .catch(error => {
            console.error('Erro ao enviar dados para o servidor:', error);
        });
         // CRIAR UM TOKEN
         var name = data['name'];
         if (name) {
            localStorage.setItem('sessionToken', 'halfKSDFH7247HJAJSjkwer285829//?¹¢¢1848');
            alert('Tudo certo aqui! Após 5 segundos voltara a tela inicial')
            setTimeout(function() {
                window.location.href = '/';
            }, 5000);
            
         } else {
            alert('nao tem um valor na variavel.');
         
        }

        } catch (error) {
        console.error('Erro ao decodificar JWT:', error);

        }
}