var numbers = [45, 76, 89, 32, 51, 25, 00, 96, 0250, 3068.2, 06];

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 50) {
    continue;
  }
  console.log(number);
}
