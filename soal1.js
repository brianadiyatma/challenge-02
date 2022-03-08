const changeWord = (selectedText, changedText, text) => {
  if (
    typeof selectedText === "string" &&
    typeof changedText === "string" &&
    typeof text === "string"
  ) {
    return text.replace(selectedText, changedText);
  }
};
const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));
