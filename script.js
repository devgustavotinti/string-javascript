// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0
let recebimentoTotal = 0

transacoes.forEach((item) => {
  const valor = Number(item.valor.replace('R$ ', ''))
  if (item.descricao.slice(0, 4) === 'Taxa') {
    taxaTotal += valor
  } else {
    recebimentoTotal += valor
  }
})
// console.log(taxaTotal)
// console.log(recebimentoTotal)



// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTr = transportes.split(';')
// console.log(arrayTr)




// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const novoHtml = html.replace(/['span']+/g, 'a')
// console.log(novoHtml)



html = html.split('span').join('a')

// console.log(html)




// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
// console.log(frase[frase.length - 1])




// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxasTotal = 0

transacoes2.forEach((item) => {
  let taxa = item.trim()
  taxa = taxa.toLowerCase()
  taxa = taxa.slice(0, 4)

  if (taxa === 'taxa')
  taxasTotal++
})

console.log(taxasTotal)



