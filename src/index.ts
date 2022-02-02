import { doSomethingA } from "./part-a";
import { doSomethingB } from "./part-b";

const main: () => Promise<void> = async () => {
  const root = document.querySelector("#root");

  const text = document.createElement("p");
  text.textContent = "These buttons send transactions to the correct hub";

  const buttonA = document.createElement("button");
  buttonA.textContent = "Do Something A";
  buttonA.onclick = () => {
    doSomethingA();
  };

  const buttonB = document.createElement("button");
  buttonB.textContent = "Do Something B";
  buttonB.onclick = () => {
    doSomethingB();
  };

  root?.appendChild(text);
  root?.appendChild(buttonA);
  root?.appendChild(buttonB);
};

main().catch((error) => {
  console.error(error);
  throw error;
});
