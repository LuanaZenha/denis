let card = document.getElementById("card");

// Exibir a mensagem caso seja selecionado o 'sim'
document.querySelector("#yes").addEventListener("click", function () {
  let question = document.getElementById("question");
  let message = document.getElementById("answer");

  card.style.backgroundImage =
    "url('https://i.pinimg.com/originals/3e/8a/ec/3e8aecc8cfdbf39d32d4d76c3c6046ea.gif')";
  question.style.display = "none";
  message.style.display = "flex";
});

// Movimento aleatório do botão 'não'
document.querySelector("#no").addEventListener("mouseover", function () {
  let width = window.innerWidth - 50;
  let height = window.innerHeight - 50;

  this.style.position = "absolute";
  this.style.top = Math.random() * width + "px";
  this.style.left = Math.random() * height + "px";
});