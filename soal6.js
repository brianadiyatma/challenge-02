const getAngkaTerbesarKedua = (arr) => {
  if (typeof arr === "object") {
    sortedArr = arr.sort();
    return sortedArr[sortedArr.length - 2];
  } else {
    return "Tipe data hanya dapat menerima Array";
  }
};

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
