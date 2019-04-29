function query(tag){
    return document.querySelector(tag);
}

const valorItem = query("#valorItem");
const descontoEmPorcentagem = query("#desconto");
const gerarDesconto = query("#gerarDesconto");
const valorFinal = query("#valorFinal");
const descontoGerado = query("#descontoGerado");

gerarDesconto.onclick = (event) => {
    event.preventDefault();

    if(valorItem.value > 0 && descontoEmPorcentagem.value > 0){
        const desconto = valorItem.value * (descontoEmPorcentagem.value/100);
        const final = valorItem.value - desconto;

        valorFinal.innerText = "Valor final do produto: " + final;
        descontoGerado.innerText = "Valor do descontado do produto: " + desconto;
    }else{
        alert("Preencha os valores com números positivos!");
    };

    valorItem.value = "";
    descontoEmPorcentagem.value = "";
};  
