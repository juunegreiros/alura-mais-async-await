const apiUrl = 'http://localhost:5000/clientes'

const clientes = [{ nome: 'teste', cpf: '00000000000' }]
const listaClientes = document.querySelector('#listaClientes')

clientes.forEach(cliente => listaClientes.innerHTML += `<li>nome: ${cliente.nome} cpf: ${cliente.cpf} </li>`)