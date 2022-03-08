const checkTypeNumber = (givenNumber) => {
  if (
    typeof givenNumber === "number" &&
    typeof givenNumber !== "string" &&
    givenNumber % 2 === 0
  ) {
    return "GENAP";
  } else if (
    typeof givenNumber === "number" &&
    typeof givenNumber !== "string"
  ) {
    return "GANJIL";
  } else {
    return "Error: Invalid data type";
  }
};
console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
