//Variáveis do ator
let xAtor = 100;
let yAtor = 366;
let velocidadeAtor = 3;
let atorColidiu = false;
let pontos = 0;

function mostraAtor() {
  
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  
  if(keyIsDown(UP_ARROW)) {
    
    yAtor -= velocidadeAtor;
    
    if(yAtor < 1) {
      
      yAtor = 1;
    }
    
  } else if(keyIsDown(DOWN_ARROW)) {
    
    yAtor += velocidadeAtor;
    
    if(yAtor > 387) {
      
      yAtor = 387;
    }
  }
}

function velocidadeMinimaAtor() {
  
  if(velocidadeAtor < 3) {
    
    velocidadeAtor = 3;
  }
}

function colisaoAtor() {
  
  for(let i = 0; i < imagemCarros.length; i++) {
    
    if(yAtor < yCarros[i] + 40 &&
      xAtor + 30 > xCarros[i] &&
       yAtor + 30 > yCarros[i] &&
       xAtor < xCarros[i] + 50) {
      
      //yAtor = 366;
      atorColidiu = true;
    }    
  } 
  if(atorColidiu) {
    
    yAtor = 366;
    xCarros[5] = 570;
    somDaColisao.play();
  }
}

function pontuacao() {
  
  if(yAtor + 30 < yCarros[0]) {
    
    somDoPonto.play();
    pontos += 1;
    yAtor = 390;
    velocidadeAtor += 0.3;
    xCarros[5] = 570;
    
    for(let i = 0; i < imagemCarros.length; i++) {
      
      velocidadeCarros[i] += 1;
    }
      
  } else if(atorColidiu) {
    
    pontos -= 1;    
    velocidadeAtor -= 0.3;  
    
    for(let i = 0; i < imagemCarros.length; i++) {   
           
      velocidadeCarros[i] -= 1;
      }
    }
    atorColidiu = false;      
}

function pontuacaoMinima() {
  
  if(pontos < 0) {
    
    pontos = 0;
  }
}

function mostrarPontuacao() {
  
  textSize(25);
  textAlign(CENTER);
  fill(color(255, 240, 60));
  text(pontos, 440, 27);
  
}


  
  