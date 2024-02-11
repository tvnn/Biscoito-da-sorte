function abrirBiscoito() {
  // Seleciona o elemento do biscoito
  const biscoito = document.querySelector('.biscoito');

  // Define uma nova imagem para o biscoito
  biscoito.innerHTML = '<img src="./assets/opened-cookie.jpg" alt="Biscoito da Sorte">';

  // Adiciona uma animação ao biscoito
  biscoito.classList.add('animado');

  // Define uma mensagem para o usuário
  const mensagem = document.querySelector('.mensagem');
  mensagem.innerHTML = 'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.';
}

// Quando o usuário clica no biscoito ou pressiona Enter, a função abrirBiscoito é executada
document.addEventListener('click', abrirBiscoito);
document.addEventListener('keypress', abrirBiscoito);