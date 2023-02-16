var a = ['ab','cd','ef']
var b = ['af', 'ee', 'ef']

function twoStrings(s1, s2) {
    let lettersMap = {};
    for (const letter of s1) {
      if (!lettersMap[letter]) {
        lettersMap[letter] = 1;
      }
    }
  
    for (const letter of s2) {
      if (lettersMap[letter]) {
        return 'YES';
      }
    }
    return 'NO';
}

for(let i = 0; i < a.length; i++) {
    console.log(twoStrings(a[i], b[i]));
}