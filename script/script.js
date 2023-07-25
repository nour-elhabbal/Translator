let textInput = document.querySelector(".text");
let btn = document.querySelector(".btn");
let translation = document.querySelector(".translation");

let qwerty = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "H",
  "j",
  "k",
  "l",
  ";",
  "'",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "/",
  "`",
  " ",
];

let arabic = [
  "ض",
  "ص",
  "ث",
  "ق",
  "ف",
  "غ",
  "ع",
  "ه",
  "خ",
  "ح",
  "ج",
  "د",
  "ش",
  "س",
  "ي",
  "ب",
  "ل",
  "ا",
  "أ",
  "ت",
  "ن",
  "م",
  "ك",
  "ط",
  "ئ",
  "ء",
  "ؤ",
  "ر",
  "b",
  "ى",
  "ة",
  "و",
  "ز",
  "ظ",
  "ذ",
  " ",
];

let insertedText;

textInput.addEventListener("change", (e) => {
  insertedText = e.target.value;

  let splittedText = insertedText.split("");
  let translated = [];

  for (let i = 0; i < splittedText.length; i++) {
    if (qwerty.indexOf(splittedText[i]) > 0) {
      let index = qwerty.indexOf(splittedText[i]);
      translated.push(arabic[index]);
    } else {
      let index = arabic.indexOf(splittedText[i]);
      translated.push(qwerty[index]);
    }
  }

  btn.addEventListener("click", () => {
    translation.innerHTML = `${translated.join("")}`;
  });
});
