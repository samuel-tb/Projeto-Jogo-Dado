let ptsJogador1 = 0;
let ptsJogador2 = 0;
let empate = 0;

let btn = document.querySelector(".btn");
btn.addEventListener("click", function jogoDado(){

    document.querySelector("h1").innerHTML = "Jogo dos Dados";
    
    //Jogador 1
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomImageSource1 = "img/dice" + randomNumber1 + ".png"; 
    document.querySelectorAll("img")[0].setAttribute("src" , randomImageSource1);
    
    //Jogador 2
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let randomImageSource2 = "img/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    //Resultado
    if(randomNumber1 > randomNumber2){
        document.querySelector(".sub-titulo").innerHTML = "😎 Jogador 1 ganhou a rodada 😎"
        ptsJogador1++;
    } 
    else if(randomNumber2 > randomNumber1){
        document.querySelector(".sub-titulo").innerHTML = "😎 Jogador 2 ganhou a rodada 😎"
        ptsJogador2++;

    }
    else{
        document.querySelector(".sub-titulo").innerHTML = "🤝 Empate na rodada 🤝"
        empate++;
    }

    //Contator de pontos
    document.querySelector('.jogador1').innerHTML = "Jogador 1: " + ptsJogador1 + " vitórias";
    document.querySelector('.jogador2').innerHTML = "Jogador 2: " + ptsJogador2 + " vitórias";
    document.querySelector('.empate').innerHTML = "Empate: " + empate;

    //Fim de jogo
    if(ptsJogador1 === 100){
        document.querySelector("h1").innerHTML = "🏆 O grande Vencedor foi o Jogador 1 com 100 vitórias 🏆";
        document.querySelector(".sub-titulo").innerHTML = "Clique em jogar novamente para começar um novo jogo";
        ptsJogador1 = 0;
        ptsJogador2 = 0;
        empate = 0;
    }

    else if(ptsJogador2 === 100){
        document.querySelector("h1").innerHTML = "🏆 O grande Vencedor foi o Jogador 2 com 100 vitórias 🏆";
        document.querySelector(".sub-titulo").innerHTML = "Clique em jogar novamente para começar um novo jogo";

        ptsJogador1 = 0;
        ptsJogador2 = 0;
        empate = 0;
    }
})

    



    

    



