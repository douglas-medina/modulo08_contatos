const form = document.getElementById('form-contatos')
const contatos = []
const numerosTel = []
let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato = document.getElementById('numero-contato')

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O Nome "${inputNomeContato.value}" já foi adicionado`)
    } else if (numerosTel.includes(inputNumeroContato.value)) {
        alert(`O Número "${inputNumeroContato.value}" já foi adicionado`)
    } else {
        contatos.push(inputNomeContato.value)
        numerosTel.push(inputNumeroContato.value)

        let linha = '<tr>'
        linha += `<td>${inputNomeContato.value}</td>`
        linha += `<td>${inputNumeroContato.value}</td>`
        linha += '</td>'

        linhas += linha

        const corpoTabela = document.querySelector('tbody')
        corpoTabela.innerHTML = linhas
    }

    inputNomeContato.value = ''
    inputNumeroContato.value = ''
}

