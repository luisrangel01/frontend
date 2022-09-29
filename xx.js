console.clear();

function isPalindrome(s) {
  console.log(typeof s);
  let result = true;
  const base = String(s);
  console.log(`------`, base);
  //   for (let index = 0; index < base.length / 2; index++) {
  //     if (base[index] !== base[base.length - 1 - index]) {
  //         result = false;
  //         break;
  //     }
  //   }

  for (let index = 0; index < base.length / 2; index++) {
    if (base[index] !== base[base.length - 1 - index]) {
      return false;
    }
  }
  return result;
}

console.log(isPalindrome("anna"));
console.log(isPalindrome("walter"));
console.log(isPalindrome(12321));
console.log(isPalindrome(123456));
console.log(isPalindrome("."));
