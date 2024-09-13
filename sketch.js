let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("10");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("gray");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(96, 1, 525));
  textAlign(CENTER, CENTER);
  textSize(60);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
        if (idade >= 10) {
        if (idade >= 14) {
      return "Carros"
    } else {
      if (idade >= 14) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Monstros S.A";          
        } else{
         return "Monstros S.A";
        }
      } else {
        if (gostaDeFantasia) {
          return "A Vida é uma Festa (";
        } else {
          return "A Vida é uma Festa ";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Carros";
    } else {
      return "Carros";
    }
  }
}
