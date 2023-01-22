// Variáveis.
const btnTrailer = document.querySelector(".botao-trailer");
const btnFecharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

// Atribuindo evento de abrir no botão "VEJA O TRAILER".
btnTrailer.addEventListener("click", () =>{
    alternarModal();
    video.setAttribute("src", linkVideo);
});

// Atribuindo evento de fechar no botão "X".
btnFecharModal.addEventListener("click", () =>{
    alternarModal();
    video.setAttribute("src", "");
});