function navBarOpen(){
    document.getElementById("sideBar").classList.remove("hidden");
    document.getElementById("navBar").classList.remove("hiddenNavBar");
    document.getElementById("content").classList.remove("hiddenContent");
    // Buttons function
    setTimeout(() => {
        document.getElementById("buttonOpen").classList.add("buttonHide");
        document.getElementById("buttonOpen").classList.remove("buttonShow");
    },300);


}
function navBarClose(){
    document.getElementById("sideBar").classList.add("hidden");
    document.getElementById("navBar").classList.add("hiddenNavBar");
    document.getElementById("content").classList.add("hiddenContent");
    // Buttons function
    setTimeout(() => {
        document.getElementById("buttonOpen").classList.remove("buttonHide");
        document.getElementById("buttonOpen").classList.add("buttonShow");
    },300);
    
}