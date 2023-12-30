document.getElementById("vamos-la").addEventListener("click", function () {
    var emailInput = document.getElementById("email").value;
let emailValido = document.getElementById("email-valido");
let emailVazio = document.getElementById("email-vazio");

    if (emailInput.trim() !== "") {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (emailPattern.test(emailInput)) {
            window.location.href = "../../html/antes-login/pagina-cadastro.html";
        } else {
            emailValido.style.display = "block";
            setTimeout(function() {emailValido.style.display = "none"}, 3000);
        }   
    } else {
        emailVazio.style.display = "block";
        setTimeout(function() {emailVazio.style.display = "none"}, 3000);
    }
});