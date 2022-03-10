export default function fizzBuzz(): (string | number)[] {
  const variable = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      variable.push("fizzbuzz");
    } else if (i % 3 === 0) {
      variable.push("fizz");
    } else if (i % 5 === 0) {
      variable.push("buzz");
    } else {
      variable.push(i);
    }
  }
  return variable;
}

console.log(fizzBuzz());
