// Escreva seu código aqui
import { Numero1 } from './assests/n1.js'
import { Numero2 } from './assests/n2.js'
import { Numero3 } from './assests/n3.js'



//SELECIONANDO DADOS
const primeiroNum = new Numero1(0)
const segundoNum = new Numero2(0)
const terceiroNum = new Numero3(0)
const number1 = document.querySelector('#numero1')
const number2 = document.querySelector('#numero2')
const number3 = document.querySelector('#numero3')
const cores = document.querySelectorAll('.cores')
const resultado1 = document.querySelector('.resultado1')
const resultado2 = document.querySelector('.resultado2')
const resultado3 = document.querySelector('.resultado3')
const resultado = document.querySelector('.resultado')
const bannerMeiaVitoria = document.querySelector('.banner-meia-vitoria')
const btnBannerMeiaVitoria = document.querySelector('.botao-banner')
const bannerVitoria = document.querySelector('.banner-vitoria')
const btnVitoria = document.querySelector('.botao-banner-vitoria')
const btn = document.querySelector('.btn')
let contador = 0




//FUNÇÃO NO BOTAO
btn.addEventListener('click', function(){
    const intervalo = setInterval(() => {
        contador++
        cores.forEach((elemento) => elemento.style.border = corRandom())
        number1.innerText = primeiroNum.novoValor()
        number2.innerText = segundoNum.novoValor()
        number3.innerText = terceiroNum.novoValor()
        
        if (contador > 5){
            clearInterval(intervalo)
            contador = 0
            if ((number1.innerText == number2.innerText) && (number1.innerText == number3.innerText)){
                bannerVitoria.id = ''
                resultado.innerText = `${number1.innerText} ${number1.innerText} ${number1.innerText}`

               
            }
            
            else if ((number1.innerText == number2.innerText) || (number1.innerText == number3.innerText) || (number2.innerText == number3.innerText)){
                bannerMeiaVitoria.id = ''
                resultado1.innerText = `${number1.innerText}`
                resultado2.innerText = `${number2.innerText}`
                resultado3.innerText = `${number3.innerText}`
               

                

            }
            
        }
    }, 200);
})



btnBannerMeiaVitoria.addEventListener('click', function(){
    bannerMeiaVitoria.id = 'none'
    number1.innerText = 0
    number2.innerText = 0
    number3.innerText = 0
}) 


btnVitoria.addEventListener('click', function(){
    bannerVitoria.id = 'none'
    number1.innerText = 0
    number2.innerText = 0
    number3.innerText = 0
})

//Pinta bordas
function corRandom() {
    let letras = '0123456789ABCDEF';
    let hexadecimal = '#';
    for (let i = 0; i < 6; i++) {
      hexadecimal += letras[Math.floor(Math.random() * 16)];
    }
    return `2px solid ${hexadecimal}`;
  }