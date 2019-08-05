const apiUrl = 'http://localhost:5000/clientes'

const clientes = [{ nome: 'teste', cpf: '00000000000' }]
const listaClientes = document.querySelector('#listaClientes')

async function buscaClientes() {
  const resposta = await fetch(apiUrl)
  const novosClientes = await resposta.json()

  if(resposta.status != 200) {
    throw resposta
  }
  return novosClientes
}

buscaClientes()
  .then(novosClientes => novosClientes.forEach(cliente => 
    listaClientes.innerHTML += `<li>nome: ${cliente.nome} cpf: ${cliente.cpf} </li>`
  ))
  .catch(erro => listaClientes.innerHTML = erro)