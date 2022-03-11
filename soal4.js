const isValidPassword = (password) => {
  let reg = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);
  if (typeof password === "string") {
    if (reg.test(password)) {
      return true;
    } else {
      return false;
    }
  } else {
    return "INVALID SALAH TIPE DATA";
  }
};

console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword("0"));
console.log(isValidPassword());
