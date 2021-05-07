const comida = 'Pizza'
const liquido = new String('Água')

// console.log(comida.length)

const frase = 'A melhor comida'

// lenght
// console.log(frase[0])
// console.log(frase[frase.length - 1])



// charAt()
// console.log(frase.charAt(2))


// str.includes(search, position)
// Procura pela string exata dentro de outra string. A procura é case sensitive.
// console.log(frase.includes('comida'))
// console.log(frase.includes('banana'))



// str.endsWith(search) e str.startsWith(search)
// Procura pela string exata dentro de outra string. A procura é case sensitive.
// console.log(frase.startsWith('a'))
// console.log(frase.startsWith('A'))



// str.slice(start, end)
// Corta a string de acordo com os valores de start e end.
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi



// indexOf()
// console.log(frase.indexOf('i'))



// str.padStart(n, str) e str.padEnd(n, str)
// Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

// listaPrecos.forEach((preco) => {
//   console.log(preco.padStart(10, '.'));
// })
// console.log(listaPrecos[0].padStart(10, '.')) // .....R$ 99
// console.log(listaPrecos[0].padEnd(10, '.'))  // R$ 99.....



// repeat()
const ta = 'Tá'
// console.log(ta.repeat(5))


// replace()
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ')
// console.log(listaItens)

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'
 


// split()
// Divide a string de acordo com o padrão passado e retorna uma array.
const arrayLista = listaItens.split(', ')
// console.log(arrayLista)


// str.toLowerCase() e str.toUpperCase()
const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true




// str.trim(), str.trimStart(), str.trimEnd()
// Remove espaço em branco do início ou final de uma string.
const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'
