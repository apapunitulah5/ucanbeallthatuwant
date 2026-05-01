const yesArea = document.getElementById("yesArea");

const yesTexts = [
  "yes", "Yes", "YES", "yEs", "yeS",
  "Yess", "YESSS", "yes :(", "yes ;(", "yes?",
  "yes.", "yes!", "yesss", "YeS", "yES",
  "can we", "please yes", "iyaa", "iya...", "iya ;(",
  "YES PLEASE", "yes yes", "yup", "yupp", "ofc yes",
  "still yes", "always yes", "yes, we can", "yes♡", "YES."
];

if (yesArea) {
  yesTexts.forEach((text) => {
    const button = document.createElement("button");
    button.className = "yes-btn";
    button.textContent = text;

    button.addEventListener("click", () => {
      alert("contact me pls... ;(");
    });

    yesArea.appendChild(button);
  });
}