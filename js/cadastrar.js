document.querySelector('#botao-cadastrar').addEventListener('click',()=>{

    const form = document.querySelector("form")

    const tarefa = {
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        pontos: form.pontos.value
    } 

    validar(tarefa)

    console.log(titulo, descricao, pontos)
}
)

function validar(tarefa){
    limparErros()
    if(tarefa.titulo.trim() == ""){
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#tituloerro").innerText = "o titulo é obrigatório"
    }

    if(tarefa.descricao.trim() == "" || tarefa.descricao.length < 10){
        document.querySelector("#descricao").classList.add("is-error")
        document.querySelector("#descricaoerro").innerText = "a descrição deve ter pelo menos 10 caracteres"
    }

    if(tarefa.pontos <= 0){
        document.querySelector("#pontos").classList.add("is-error")
        document.querySelector("#pontoserro").innerText = "os pontos devem ser maior que 0"
    }
    

}

function limparErros(){
    document.querySelector("input .is-error, textarea .is-error")
    .classList
    .remove("is-error")
}