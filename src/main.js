document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // impede o envio do formulário
    if (this.checkValidity()) { // verifica se o formulário é válido
        redirectToIndex();
    }
});

function redirectToIndex() {
    window.location.href = "index.html";
}