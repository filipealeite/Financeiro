function navBarOpen(){
    document.getElementById("sideBar").classList.remove("hidden");
    document.getElementById("navBar").classList.remove("hiddenNavBar");
    document.getElementById("content").classList.remove("hiddenContent");
    
    // Buttons function
    setTimeout(() => {
        document.getElementById("buttonOpen").classList.add("buttonHide");
        document.getElementById("buttonOpen").classList.remove("buttonShow");
    },300);

    document.getElementById("buttonOpen").style.display="none";    
}
function navBarClose(){
    document.getElementById("sideBar").classList.add("hidden");
    document.getElementById("navBar").classList.add("hiddenNavBar");
    document.getElementById("content").classList.add("hiddenContent");
    // Buttons function
    setTimeout(() => {
        document.getElementById("buttonOpen").style.display="flex";    
        document.getElementById("buttonOpen").classList.remove("buttonHide");
        document.getElementById("buttonOpen").classList.add("buttonShow");
    },300);
    
}

function exibirCadastro() {
    let modal = document.getElementById("modal");
    modal.style.display = "block";
}

window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

