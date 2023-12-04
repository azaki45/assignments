/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let map1 = new Map();
  let map2 = new Map();

  if(str1.length != str2.length) return false;

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let i = 0; i < str1.length; i++) {
    map1.set(str1[i],0);
    map2.set(str2[i],0);
  }

  for (let i = 0; i < str1.length; i++) {
    map1.set(str1[i],map1.get(str1[i])+1);
    map2.set(str2[i],map2.get(str2[i])+1);
  }

  for (let i = 0; i < str1.length; i++) {
    if (!map2.has(str1[i])) {
      return false;
    }
    if (map1.get(str1[i]) != map2.get(str1[i])) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;