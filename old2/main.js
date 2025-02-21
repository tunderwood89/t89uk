document.addEventListener("DOMContentLoaded", () => {
  const pillContainer = document.querySelector(".pill-container");
  const texts = document.querySelectorAll(".text");
  const measureDiv = document.querySelector(".measurement-div");
  const totalTexts = texts.length;
  let currentIndex = 0;

  function measureText(text) {
      measureDiv.textContent = text;
      return measureDiv.getBoundingClientRect().width;
  }

  function updateText() {
      texts.forEach(text => text.classList.remove('active'));
      texts[currentIndex].classList.add('active');
      
      const currentText = texts[currentIndex].textContent;
      const textWidth = measureText(currentText);
      pillContainer.style.width = `${textWidth + 40}px`;

      currentIndex = (currentIndex + 1) % totalTexts;
      setTimeout(updateText, 2000);
  }

  texts[0].classList.add('active');
  const initialWidth = measureText(texts[0].textContent);
  pillContainer.style.width = `${initialWidth + 40}px`;

  setTimeout(() => {
      updateText();
  }, 2000);
});
