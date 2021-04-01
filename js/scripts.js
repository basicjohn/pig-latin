// One language is never enough
// Oneway anguagelay isway evernay enoughway

// Business Logic
const stringInput = "between words language";
function pigLatin(text) {
  text = text.toLowerCase();
  const vowel = ["a", "e", "i", "o", "u"];
  const vowelLiteral = "aeiou";
  const englishArray = text.split(" ");
  const pigLatinArray = []
  let firstHalf;
  let secondHalf;
  // console.log(text);
  englishArray.forEach(function (word) {
    let firstLetter = word.charAt(0);
    if (vowel.includes(firstLetter)) {
      word = word.concat("way");
      pigLatinArray.push(word);
      // console.log(pigLatinArray);
    } else {

      for (let i = 0; i < word.length; i++) {
        console.log(vowel[i], word.charAt(i));
        if (vowelLiteral.includes(word[i])) {
          firstHalf = word.substring(0, i);
          word = word.substring(i);
        }
      }
      console.log(firstHalf, word);
      word = word.concat(firstHalf + "ay");
      pigLatinArray.push(word);
      console.log(pigLatinArray);
    }
  });
}
pigLatin(stringInput);



// UI Logic
