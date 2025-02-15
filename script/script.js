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
const modal = document.querySelector("[data-model]");
const openButton = document.querySelector("[data-open-modal]");
const cleseButton = document.querySelector("[data-close-modal]");
openButton.addEventListener("click",()=>{
    modal.showModal();
});


function exibirCadastro(){

    

}


