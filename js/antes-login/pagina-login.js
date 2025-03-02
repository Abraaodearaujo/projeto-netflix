document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("entrar").addEventListener("click", function() {
        // Obter valores dos campos de entrada
        var email = document.getElementById("email").value;
        var senha = document.getElementById("senha").value;

        // Verificar se as credenciais correspondem
        if (email === "teste@gmail.com" && senha === "102030") {
            window.location.href = "../../html/depois-login/quem-esta.html"; 
        } else {
            alert("Email ou senha inválidos. Por favor, tente novamente.");
        }
    });
});
