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
                var divValorContainer = document.createElement("div")
                document.getElementById("main-contas").appendChild(div)
                
                
                var labelId = document.createElement("label")
                var labelDescricao = document.createElement("label")
                var labelValor = document.createElement("label")
                var labelIcone = document.createElement("span")
                div.appendChild(labelId)
                div.appendChild(labelDescricao)
                divValorContainer.appendChild(labelValor)
                divValorContainer.appendChild(labelIcone)
                div.appendChild(divValorContainer)
                // div.appendChild(labelIcone)
                divValorContainer.classList.add("divContainerValor")
                labelId.innerHTML = `Conta: ${ String("000000" + element.id).slice(-6)}`
                labelDescricao.innerHTML = `Descricao: ${element.descricao}`
                labelValor.innerHTML = `Valor em Conta: ${element.valor}`
                labelIcone.innerHTML = `
                <svg class="h-6 w-6 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>`
                div.classList.add("conta")
                labelIcone.classList.add("trash")


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