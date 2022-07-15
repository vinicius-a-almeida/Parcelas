function calcular(){
    let valor = Number(window.document.getElementById('valor').value)
    let parcelas = Number(window.document.getElementById('parcelas').value)
    let percentual = Number(window.document.getElementById('percentual').value)
    let res = window.document.getElementById('res')
    let resultado = valor / parcelas
    for(let i = 2; i <= parcelas; i++){
        resultado = resultado + (resultado * (percentual / 100))
        let resultadoFormatado = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        res.innerHTML += (`O valor da parcela ${i} é ${resultadoFormatado}`)
    }
}