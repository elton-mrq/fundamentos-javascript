//variáveis:
let nome = 'Elton';
let sobreNome = 'Marques';
let idade = 30;
let aprovado = true;

//imprimindo no console:
console.log('Nome: ' + nome + ' ' + sobreNome + ' | Idade: ' + idade);

//constantes:
const pi = 3.14;

//Tipo de variáveis
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof aprovado);

//Objetos:
let pessoa = {nome, sobreNome, idade};
console.log(pessoa.nome);

//Arrays
let endereco = ['Rua', '25 de março', 1234];
console.log(endereco[1]);

//Funções
let corSelecionada = 'Branco';
function resetCor(cor, tonalidade){
    corSelecionada = cor + ' ' + tonalidade;
}
console.log(corSelecionada);
resetCor('Amarelo', 'Ouro');
console.log(corSelecionada)

//Tipos de Funções
//1 - Sem retorno
function imprimeNome(){
    console.log('Elton Marques');
}
imprimeNome();

//2 - Com retorno
function calculaArea(raio){
    let areaCirculo = pi * raio * raio;
    return areaCirculo;
}

let resultado = calculaArea(10);
console.log("Área do circulo: " + resultado);

//Operadores Aritiméticos
let salario = 1000;
//Adição
console.log(salario + salario); 
//Subtração
console.log(salario - salario); 
//Multiplicação
console.log(salario * salario); 
//Divisão
console.log(salario / salario); 
//Exponenciação
console.log(3 ** 3); 

//Incremento e Decremento
let valor = 30;
console.log(++valor);
console.log(--valor);

//Comparação - Estrita
// compara os valores e o tipo
console.log(1 === 1); 
console.log('1' === 1);

//Igualdade solta, não compara tipo, não recomendada
console.log('1' == 1); 

//Operador ternario
//Cliente com 100 pontos premium
let pontos = 200;
let tipo = pontos > 100 ? 'premio' : 'comum';
console.log(tipo);

//Lógicos 
//Operador e &&
console.log(true && true);
console.log(true && false);
console.log(false && false);
let maiorIdade = true;
let carteiraTrabalho = true;
let aplicando = maiorIdade && carteiraTrabalho;
console.log(aplicando);

//Operador ou ||
console.log(true || true);
console.log(true || false);
console.log(false || false);
maiorIdade = false;
carteiraTrabalho = false;
aplicando = maiorIdade || carteiraTrabalho;
console.log(aplicando);

//Operador negação !
let possuiCarteira = !aplicando
console.log(possuiCarteira);
//e Bitwise
