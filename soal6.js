const getAngkaTerbesarKedua = (arr) => {
  if (Array.isArray(arr)) {
    maxValue = Math.max(...arr);
    const filteredArr = arr.filter((item) => maxValue !== item);
    const resultArr = filteredArr.sort();
    return resultArr[resultArr.length - 1];
  } else {
    return "Tipe data hanya dapat menerima Array";
  }
};

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];


console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
