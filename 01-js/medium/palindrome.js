/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let str1 = "";
  let revStr = "";

  for (let i = 0; i < str.length; i++) {
    if(str[i]>='a' && str[i]<='z')
    {
      str1 = str1 + str[i];
      revStr = str[i] + revStr;
    }
  }

  if(str1===revStr)
    return true;
    else
  return false;
}

module.exports = isPalindrome;
