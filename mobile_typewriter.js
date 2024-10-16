document.addEventListener("DOMContentLoaded", function() {
  const inputField = document.getElementById('mobile-typewriter');
  const placeholders = [
    "got rejected.",
    "moved back home.",
    "lost my temper.",
    "failed my children.",
    "looked so ugly.",
    "went bankrupt.",
    "gained weight.",
    "cooked a bad meal.",
    "flunked university."
  ];

  let index = 0;
  let currentText = '';

  function typeEffect(text, callback) {
    let i = 0;
    function type() {
      if (i < text.length) {
        currentText += text[i];
        inputField.placeholder = currentText;
        i++;
        setTimeout(type, 100); // Typing speed
      } else {
        callback();
      }
    }
    type();
  }

  function deleteEffect(callback) {
    let i = currentText.length;
    function backspace() {
      if (i >= 0) {
        currentText = currentText.substring(0, i);
        inputField.placeholder = currentText;
        i--;
        setTimeout(backspace, 50); // Backspace speed
      } else {
        callback();
      }
    }
    backspace();
  }

  function changePlaceholder() {
    deleteEffect(() => {
      index = (index + 1) % placeholders.length;
      typeEffect(placeholders[index], () => {});
    });
  }

  changePlaceholder();
  // Change the placeholder every 1 seconds (1000ms)
  setInterval(changePlaceholder, 5000);
});
