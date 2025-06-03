function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const words = ['Full-stack Developer', 'Graphic Designer'];
const typingAnimation = document.getElementById('typing-animation');
let currentWordIndex = 0;
let currentCharIndex = 0;

function typeWord() {
  const word = words[currentWordIndex];
  const char = word[currentCharIndex];
  typingAnimation.textContent += char;
  currentCharIndex++;

  if (currentCharIndex >= word.length) {
    currentCharIndex = 0;
    currentWordIndex = (currentWordIndex + 1) % words.length;
    setTimeout(() => {
      typingAnimation.textContent = '';
      typeWord();
    }, 1000); 
  } else {
    setTimeout(typeWord, 100); 
  }
}

typeWord();
