const modal = document.getElementById(`modal`);
const modalPanel = document.getElementById(`modalPanel`);
const modalContent = document.getElementById(`modalContent`);
const modalButton = document.getElementById(`modalButton`);
const menu = document.getElementById(`menu`);
const menuButton = document.getElementById(`menuButton`);

menuButton.onclick = function() {
    menu.style.display = `block`; //TODO: fill
};

modalButton.onclick = function() {
    modal.style.display = `block`;
    modalPanel.style.display = `block`;
    modalContent.style.display = `block`;
};

window.onclick = function(event) {
    if(event.target === modal) {
        modal.style.display = `none`;
        modalPanel.style.display = `none`;
        modalContent.style.display = `none`;
    }
};

window.onkeydown = function (event) {
    if(event.key === `Escape`) {
        modal.style.display = `none`;
        modalPanel.style.display = `none`;
        modalContent.style.display = `none`;
    }
};
