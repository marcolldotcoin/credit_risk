document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.querySelector(".navbar"); // Trova la navbar

    if (navbar) {
        let backButton = document.createElement("button");
        backButton.className = "back-button";
        backButton.innerHTML = "⬅ Torna Indietro";
        backButton.onclick = function () {
            history.back();
        };

        navbar.appendChild(backButton); // Aggiunge il pulsante nella navbar
    }
});
