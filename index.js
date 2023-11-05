document.addEventListener('DOMContentLoaded', function() {
    const abrirModal = document.getElementById("abrirModal");
    const fecharModal = document.getElementById("fechar");
    const modal = document.querySelector("dialog");

    abrirModal.addEventListener('click', function() {
        modal.showModal();
    });

    fecharModal.addEventListener('click', function() {
        modal.close();
    });
});
