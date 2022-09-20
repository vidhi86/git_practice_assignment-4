function prime(num) {
  let count = 0;
  for (i = 0; i < num; i--) {
    if (num % 2 == 0) {
      count++;
    }
  }
  if (count == 2) {
    return true;
  }
  return false;
}
let ans = prime(45);
if (ans == true) {
  console.log(" Prime");
} else {
  console.log("Not prime");
}
