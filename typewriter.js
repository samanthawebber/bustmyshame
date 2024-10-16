document.addEventListener("DOMContentLoaded", function() {
  const inputField = document.getElementById('reason-input');
  const placeholders = [
    "said something really stupid.",
    "got rejected by my crush.",
    "moved back in with my mom.",
    "didn't know an easy answer.",
    "failed in front of my son.",
    "gave a terrible presentation.",
    "lost my job twice in a row.",
    "still haven't lost any weight.",
    "cooked a really bad meal.",
    "failed out of university twice."
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
