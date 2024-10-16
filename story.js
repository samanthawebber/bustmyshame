document.addEventListener("DOMContentLoaded", function() {
  const bustButton = document.getElementById('bust-button');
  const startDiv   = document.getElementById('start-div');
  const contextDiv = document.getElementById('context-div');
  const reasonEl   = document.getElementById('reason-input');
  const reasonHeader = document.getElementById('reason-header');

  let reasonInput = reasonEl.value;

  bustButton.addEventListener("click", function() {
    reasonInput = reasonEl.value;
    if (!reasonInput) {
      alert("You gotta write something to continue!");
      return;
    }
    startDiv.classList.toggle("hidden");
    contextDiv.classList.toggle("hidden");
    paintContext(reasonInput);
  });

  function paintContext(reasonInput) {
    if (reasonInput[reasonInput.length - 1] != ".") {
      reasonInput = reasonInput + ".";
    }
    reasonHeader.append(reasonInput);
  }
});
