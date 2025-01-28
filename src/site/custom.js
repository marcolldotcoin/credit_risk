document.addEventListener("DOMContentLoaded", function () {
    // Crea dinamicamente la finestra in sovraimpressione
    let modal = document.createElement("div");
    modal.classList.add("image-modal");
    modal.innerHTML = `<span class="close-btn">&times;</span><img id="zoomed-img">`;
    document.body.appendChild(modal);

    let modalImg = document.getElementById("zoomed-img");
    let closeBtn = document.querySelector(".close-btn");

    // Funzione per aprire la modal quando si clicca sull'immagine
    document.querySelectorAll("main.content img").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
            modalImg.style.transform = "scale(1)"; // Reset zoom
        });
    });

    // Chiudi la modal quando si clicca sulla "X"
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Zoom con la rotellina del mouse
    modalImg.addEventListener("wheel", function (event) {
        event.preventDefault();
        let scale = parseFloat(modalImg.style.transform.replace("scale(", "").replace(")", "")) || 1;
        scale += event.deltaY * -0.01; // Incremento/decremento zoom
        scale = Math.min(Math.max(1, scale), 5); // Limita lo zoom tra 1x e 5x
        modalImg.style.transform = `scale(${scale})`;
    });
});
