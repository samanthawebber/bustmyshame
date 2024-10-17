document.addEventListener("DOMContentLoaded", function() {
  const bustButton = document.getElementById('bust-button');
  const startDiv   = document.getElementById('start-div');
  const contextDiv = document.getElementById('context-div');
  const reasonEl   = document.getElementById('reason-input');
  const reasonHeader = document.getElementById('reason-header');
  const contextHeader = document.getElementById('context-header');
  const reasonP = document.getElementById('reason-p');
  const contextNext = document.getElementById('context-next');
  const effectDiv = document.getElementById('effect-div');
  const effectNext = document.getElementById('effect-next');
  const happeningDiv = document.getElementById('happening-div');
  const happeningNext = document.getElementById('happening-next');
  const reflectionDiv = document.getElementById('reflection-div');
  const reflectionNext = document.getElementById('reflection-next');
  const storyDiv = document.getElementById('story-div');
  const storyBack = document.getElementById('story-back');
  const contextP = document.getElementById('context-p');
  const effectP = document.getElementById('effect-p');
  const happeningP = document.getElementById('happening-p');
  const reflectionP = document.getElementById('reflection-p');
  let contextInput = document.getElementById('context-input');
  let effectInput = document.getElementById('effect-input');
  let happeningInput = document.getElementById('happening-input');
  let reflectionInput = document.getElementById('reflection-input');

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
    const lastChar  = reasonInput[reasonInput.length - 1];
    const firstChar = reasonInput[0]
    if (lastChar != ".") {
      reasonInput = reasonInput + ".";
    }
    if (firstChar != "I") {
      reasonInput = "I " + reasonInput;
    }

    reasonP.append(reasonInput);
  };

  contextNext.addEventListener("click", function() {
    contextDiv.classList.toggle("hidden");
    effectDiv.classList.toggle("hidden");
  });

  effectNext.addEventListener("click", function() {
    effectDiv.classList.toggle("hidden");
    happeningDiv.classList.toggle("hidden");
  })

  happeningNext.addEventListener("click", function() {
    happeningDiv.classList.toggle("hidden");
    reflectionDiv.classList.toggle("hidden");
  });

  reflectionNext.addEventListener("click", function() {
    reflectionDiv.classList.toggle("hidden");
    storyDiv.classList.toggle("hidden");
    paintStory();
  });

  storyBack.addEventListener("click", function() {
    storyDiv.classList.toggle("hidden");
    startDiv.classList.toggle("hidden");
  });

  function paintStory() {
    const storyTitle = document.getElementById('story-title');
    const lastChar  = reasonInput[reasonInput.length - 1];
    const firstChar = reasonInput[0]
    if (lastChar != ".") {
      reasonInput = reasonInput + ".";
    }
    if (firstChar != "I") {
      reasonInput = "I " + reasonInput;
    }

    storyTitle.append("This is the story of how " + reasonInput);
    contextP.append(contextInput.value);
    effectP.append(effectInput.value);
    happeningP.append(happeningInput.value);
    reflectionP.append(reflectionInput.value);
  };

});
