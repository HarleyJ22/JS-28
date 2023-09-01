function sum(...numb) {
  return numb.reduce ((num1, num2) => num1 + num2);
}

console.log(sum(1, 2, 3));