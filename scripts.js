window.onload = function() {
    document.body.classList.add('loaded');
}

// Referências aos elementos
const openPopupBtn = document.getElementById("openPopupBtn");
const popup = document.getElementById("popup");
const closePopupBtn = document.getElementById("closePopupBtn");

// Função para abrir o popup
openPopupBtn.addEventListener("click", () => {
    popup.classList.add("show");
});

// Função para fechar o popup
closePopupBtn.addEventListener("click", () => {
    popup.classList.remove("show");
});

// Fechar o popup se o fundo (fora do conteúdo) for clicado
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.classList.remove("show");
    }
});



    

   