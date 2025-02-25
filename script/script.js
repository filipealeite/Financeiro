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
        const node = document.getElementById("main-contas")
        while(node.firstChild){
            node.removeChild(node.lastChild)
        }
        getItens()
    }
};

async function getItens(){
    try{
        const response = await fetch('https://localhost:7103/api/accounts',{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const list = await response.json()
        
        if(list.length > 0){
            list.forEach(element => {
                var div = document.createElement("div")
                document.getElementById("main-contas").appendChild(div)
                
                var labelId = document.createElement("label")
                var labelDescricao = document.createElement("label")
                var labelValor = document.createElement("label")
                
                div.appendChild(labelId)
                div.appendChild(labelDescricao)
                div.appendChild(labelValor)

                labelId.innerHTML = `Id: ${element.id}`
                labelDescricao.innerHTML = `Descricao: ${element.descricao}`
                labelValor.innerHTML = `Valor: ${element.valor}`
                
                div.classList.add("conta")
            });
            console.log("work it")
        }
    }catch(error){
        console.log(error)
    }
}

async function postContas(){
    try{
        let _descricao = document.getElementById("txtNome").value;
        let _valor = document.getElementById("txtValorConta").value;

        const response = await fetch('https://localhost:7103/api/accounts',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                descricao: _descricao,
                valor: _valor
            })
        })
        await response.json
        if(response.ok){
           alert("Cadastro realizado")
        }else{
            alert("Erro ao cadastrar ou limite excedito")
        }
    }catch(error){
        console.log(error)
    }
}