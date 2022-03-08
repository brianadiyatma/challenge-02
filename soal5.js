function getSplitName(personName) {
  if (typeof personName === "string") {
    let nameArr = personName.split(" ");
    if (nameArr.length === 3) {
      return {
        firstName: nameArr[0],
        middleName: nameArr[1],
        lastName: nameArr[2],
      };
    } else if (nameArr.length === 2) {
      return {
        firstName: nameArr[0],
        middleName: null,
        lastName: nameArr[1],
      };
    } else if (nameArr.length === 1) {
      return {
        firstName: nameArr[0],
        middleName: null,
        lastName: null,
      };
    } else {
      return "ERROR : This function only for 3 characters name";
    }
  } else {
    return "ERROR : Tipe Data Hanya String";
  }
}

console.log(getSplitName("Aldi Daniela Pernata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aurelia Sukma Darma"));
console.log(getSplitName(8));
