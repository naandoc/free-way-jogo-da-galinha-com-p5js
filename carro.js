//Variáveis dos carros
let xCarros = [600, 600, 600, 500, 600, 400];
let yCarros = [40, 96, 150, 210, 260, 320];
let velocidadeCarros = [3.2, 2.6, 4, 2.1, 3.9, 1.6];

function mostraCarro() {
  
  for(let i = 0; i < imagemCarros.length; i++) {
    
    image(imagemCarros[i], xCarros[i], yCarros[i], 50,         40);
    
  }
}

function movimentaCarro() {
  
  for(let i = 0; i < xCarros.length; i++) {
    
    xCarros[i] -= velocidadeCarros[i];
  
    if(xCarros[i] < -50) {
      
      xCarros[i] = 600;
    
    } 
  }
}

function velocidadeMinima() {
  
  if(velocidadeCarros[5] < 1) {
    
    velocidadeCarros = [3.2, 2.6, 4, 2.1, 3.9, 1.6];
  }
}
