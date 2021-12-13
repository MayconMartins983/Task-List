const texto = document.getElementById('texto')
const res = document.getElementById('res')

const criarLista = () => {
    if (texto.value == '') {
        alert('Por favor preencha o campo para adicionar uma tarefa!!!')
    } else {
        const li = document.createElement('li')
        const buttonRemover = document.createElement('button')
        const span = document.createElement('span')

        const removeChild = () => {
            li.parentNode.removeChild(li)
            li.parentNode.removeChild(button)
            
        }
        buttonRemover.addEventListener('click', removeChild)

        span.appendChild(buttonRemover)
        li.textContent = `- ${texto.value}`
        buttonRemover.textContent = 'Remover'
        li.appendChild(span)
        res.appendChild(li)

        texto.value = ''
        texto.focus()

}}

texto.addEventListener('keypress', function event (event) {
    if (event.keyCode == 13) {
        criarLista()
    }
})

const button = document.getElementById('buttonCreate')
    button.addEventListener('click', criarLista) 








