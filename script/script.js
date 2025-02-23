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
    modal.style.display = "flex";
}

window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
        document.getElementById("txtNome").value = ""
        document.getElementById("txtValorConta").value = ""
    }
};

function getItens(){
    fetch('https://localhost:7103/api/accounts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error",error))
}

function postContas(){
    let _descricao = document.getElementById("txtNome").value;
    let _valor = document.getElementById("txtValorConta").value;

    fetch('https://localhost:7103/api/accounts',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            descricao: _descricao,
            valor: _valor
        })
    })
    .then((response) => response.json())
    .then(json=>console.log(json))
}

