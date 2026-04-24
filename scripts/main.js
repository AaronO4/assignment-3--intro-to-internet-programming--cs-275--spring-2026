const modal = document.getElementById(`modal`);
const modalPanel = document.getElementById(`modalPanel`);
const modalContent = document.getElementById(`modalContent`);
const modalButton = document.getElementById(`modalButton`);
const menuButton = document.getElementById(`menuButton`);
const menuOneButton = document.getElementsByClassName(`menu-one-button`);
const menuTwoButton = document.getElementsByClassName(`menu-two-button`);
const menu = document.getElementById(`menuID`);
const menuOne = document.getElementById(`dropdown-menu-one`);
const menuTwo = document.getElementById(`dropdown-menu-two`);

menuButton.onclick = function() {
    if(window.innerWidth > 736)
        menu.style.display = `block`;
    if(window.innerWidth < 736) {
        menuTwo.style.display = `block`;
    }
};

menuOneButton.onclick = function() {
    if(window.innerWidth > 736)
        menuOne.style.display = `block`;
    if(window.innerWidth < 736) {
        menuTwo.style.display = `block`;
    }
};

menuTwoButton.onclick = function() {
    if(window.innerWidth > 736)
        menuTwo.style.display = `block`;
    if(window.innerWidth < 736) {
        menuTwo.style.display = `block`;
    }
};

window.onclick = function(event) {
    if(!event.target.matches(menuButton)) {
        menu.style.display = `none`;
        menuOne.style.display = `none`;
        menuTwo.style.display = `none`;
    }
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
