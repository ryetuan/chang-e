const results = {
  tell: `
    <h2>You chose to tell someone.</h2>
    <p>
      You don't know exactly what is happening, so you decide
      not to face the uncertainty and possible danger alone. Someone you trust can
      help you work out what to do next and support you through it.
    </p>
  `,

  watch: `
    <h2>You chose to keep watching.</h2>
    <p>
      You want to know more before saying anything. This gives
      you more information, but it also means carrying the worry
      by yourself for longer and allowing the possible danger to stay for longer.
    </p>
  `,

  outside: `
    <h2>You chose to go outside.</h2>
    <p>
      You want to protect the people and things you care about,
      but facing a possible danger alone can put yourself at risk.
      This is the choice Chang'e eventually makes.
    </p>
  `
};

const buttons = document.querySelectorAll(
  ".interactive-options button"
);

const result = document.querySelector(
  "#interactive-result"
);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const choice = button.dataset.result;

    result.innerHTML = results[choice];

    buttons.forEach((otherButton) => {
      otherButton.classList.remove("selected");
    });

    button.classList.add("selected");
  });
});