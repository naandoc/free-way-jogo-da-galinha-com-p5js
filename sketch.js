function setup() {
  
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  
  background(imagemDaEstrada);   
  mostraAtor();
  mostraCarro(imagemCarro, 600, 40);
  movimentaCarro();
  movimentaAtor();
  velocidadeMinimaAtor();
  colisaoAtor();
  pontuacao();
  velocidadeMinima();
  mostrarPontuacao();
  pontuacaoMinima();
}


