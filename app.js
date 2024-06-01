let listaNumeros=[];
let limite=2;
let numeroSecreto = Random();
let contador = 1;

function textoTela(tag,texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}


mensagemInicial();

function verificarChute()
{
    let chute = document.querySelector('input').value;
    if (chute==numeroSecreto)
    {
     textoTela("h1","Acertou!");
     let palavra = contador >1 ? "tentativas" : "tentativa";
     let mensagem = `Você descobriu o número secreto com ${contador} ${palavra} ! `
     textoTela("p",mensagem);
     document.getElementById('reiniciar').removeAttribute('disabled');

    }
    else
    {
        if(chute>numeroSecreto)
        {
            textoTela("p","O número secreto é menor");
        }
        else
        {
            textoTela("p","O número secreto é maior");
        }
        contador++;
        limpar();
    }
}

function Random()
{
   let numeroEscolhido = parseInt(Math.random()*limite+1);
    let quantidade = listaNumeros.length;

    if(quantidade == limite )
    {
        listaNumeros=[];

    }

   if(listaNumeros.includes(numeroEscolhido))
   {
    return Random;

   }
   else
   {
    listaNumeros.push(numeroEscolhido);
    console.log(listaNumeros);
    return numeroEscolhido;

   }

}

function limpar()
{
    chute = document.querySelector('input');
    chute.value = '';
}

function Reiniciar()
{
    numeroSecreto = Random();
    limpar();
    contador=1; 
    mensagemInicial()
    document.getElementById("reiniciar").setAttribute('disabled',true);

}

function mensagemInicial()
{
    textoTela('h1',"Jogo do numero secreto");
    textoTela("p","Escolha um numero entre 1 e 10");

}


// function calcIMC(altura,peso)
// {

//     return console.log(imc=peso/(altura*altura));
// }

// calcIMC(10,200);

// function calcFatorial(num)
// {   
//     let fatorial = 1;

//     while(num >0)
//     {
//     fatorial=fatorial*(num);
//     num--;
//     }

//     console.log(fatorial);

// }

// calcFatorial(6);

// function calcDolar(dolar)
// {

//    console.log(real=dolar*4.8);

// }

// calcDolar(10)

// function calcPerimetro(altura,largura)
// {
//     console.log(`perimetro:${perimetro= 2*altura+2*largura}`);
//     console.log(`área:${area= altura*largura}`);


// }

// calcPerimetro(3,4);


// function calcCirculo(raio)
// {
// const pi=3.14;

// console.log(`perimetro:${perimetro= 2*pi*raio}`);
// console.log(`área:${area= pi*raio*raio}`);
// }

// calcCirculo(3);

// function calcTabuada(numero)
// {
//     let multiplicador=10;
//     while(multiplicador>=0)
//     {
//     resultado=numero*multiplicador
//     multiplicador--;
//     console.log(resultado);
//     }
// }

// calcTabuada(9)



// let listaGenerica=[];
// let linguagensDeProgramacao=['Javascript','C','C++','Kotlin','Python'];

// linguagensDeProgramacao.push('Java');
// linguagensDeProgramacao.push('Ruby');
// linguagensDeProgramacao.push('GoLang');

// console.log(linguagensDeProgramacao[7])

// Lista=[1,2,3];

// console.log(Lista[0]);
// console.log(Lista[1]);
// console.log(Lista[2]);