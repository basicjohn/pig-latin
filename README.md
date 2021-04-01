# Pig Latin

#### 
#### By _**John Edmondson**_

### Git Pages Link


## Technologies Used

* HTML
* CSS
* Bootstrap CSS Framework
* Google Fonts
* Git
* VS Code
* Javascript
* Jquery

## Description



## Setup/Installation Requirements

* _Desktop Web Browser_

## Tests

1 _Take String_
2 _Split into array_
3 _Find first letter of first word_
4 _Create vowel array_
5 _Check if first letter is vowel_
6 _vowel add 'way' to end_
7 _Create consenant branch_
8 _Move letter to end_
9 _add 'ay' after that_
10 _Create loop_
11 _Fix 'qu' issue with if statement: break after second vowel_
13 _ignore other characters_
14 _Split into array_

Test: "It recognizes a single vowel in a word with multiple characters."
Code: vowelCounter("cat");
Expected Output: 1

## Describe: pigLatin()
Test: "Take string and pass it into argument"
Code: stringInput("Hello everyone.")
Expected Output: Hello everyone.

Test: "Take string and split it into an array"
Code: stringInput.split(" ");
Expected Output: ["Hello", "everyone"]

Test: "Take first word from array"
Code: englishArray[0]
Expected Output: "Hello"

Test: "Create a vowel array from first word"
Code: vowelArray
Expected Output: 

Test: "Check if first letter is a vowel"
Code: firstLetter = word.charAt(0);
Expected Output: o

Test: "If first letter is a vowel, add 'way' to the end of the word"
Code: word = word.concat("way");
Expected Output: oneway

Test: "Push word into pigLatinArray"
Code: pigLatinarray.push(word);
Expected Output: [oneway]

Test: "create branch for words starting with a consonant"
Code: else { }
Expected output: ?

Test: "remove first letter and add to end"
Code: word = word.substring(1)
      word.concat(firstLetter)
Expected output: anguagel

Test: "add 'ay' to end of consenant"
Code: word = word.concat(firstLetter + "ay")
Expected output: anguagelay

Test: "Create Loop"
Code: word = 
Expected output: Oneway anguagelay isway evernay enoughway

Test: "Fix 'qu' issue with if statement: break after second vowel"
Code: 
Expected output: 

Test: "Ignore other characters"
Code: 
Expected output: 



## Known Bugs

* 

## License 

_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."_ 

## Contact Information

John Edmondson edmondsonj@gmail.com