document.getElementById("vamos-la").addEventListener("click", function () {
    var emailInput = document.getElementById("email").value;
let emailValido = document.getElementById("email-valido");
let emailVazio = document.getElementById("email-vazio");
let placeholder = document.getElementById("email-pla")

    if (emailInput.trim() !== "") {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (emailPattern.test(emailInput)) {
            window.location.href = "../../html/antes-login/pagina-cadastro.html";
        } else {
            alert("Digite um email valido")
            setTimeout(function() {emailValido.style.display = "none"}, 3000);
        }   
    } else {
        alert("Digite um email valido")
        setTimeout(function() {emailVazio.style.display = "none"}, 3000);
    }
});
