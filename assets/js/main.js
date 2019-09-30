const cepInput = document.querySelector('#CEP');
const ruaInput = document.querySelector('#rua');
const bairroInput = document.querySelector('#bairro');
const ufInput = document.querySelector('#UF');
const complementoInput = document.querySelector('#complemento');


const buscaCep = (evt) => {
    const cepUsuario = evt.target.value;

    if (cepUsuario.length !=8) {
        return;
    }
    
    fetch(`https://viacep.com.br/ws/${cepUsuario}/json/`) 
    .then( (resposta) => {return resposta.json() })
    .then( (dados) => { 
        ruaInput.value = dados.logradouro;
        bairroInput.value = dados.bairro;
        ufInput.value = dados.uf;
        complementoInput.value = dados.complemento;
        cepInput.value = dados.cep;
     })
 }
cepInput.oninput = buscaCep;

// fetch('https://viacep.com.br/ws/02235001/json/')
// .then((resposta) => { return resposta.json() })
// .then((dados) => { console.log(dados);
// })


