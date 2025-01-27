document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.querySelector(".navbar");
    if (navbar) {
        let backButton = document.createElement("a");
        backButton.href = "javascript:history.back()";
        backButton.className = "back-button";
        backButton.innerHTML = "⬅ Torna Indietro";
        navbar.appendChild(backButton);
    }
});
