// Obtém todas as imagens da memória
const memoryImages = document.querySelectorAll('.memory img');

// Percorre cada imagem e adiciona o evento de clique
memoryImages.forEach((image) => {
  image.addEventListener('click', () => {
    // Cria a overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    // Cria a imagem ampliada
    const enlargedImage = document.createElement('img');
    enlargedImage.src = image.src;

    // Adiciona a imagem à overlay
    overlay.appendChild(enlargedImage);

    // Adiciona a overlay ao corpo da página
    document.body.appendChild(overlay);

    // Remove a overlay ao clicar nela
    overlay.addEventListener('click', () => {
      overlay.remove();
    });
  });
})