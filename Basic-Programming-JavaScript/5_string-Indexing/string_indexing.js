let firstName = "Harshit"

// String indexing
// h    a   r   s   h   i   t
// 0    1   2   3   4   5   6   

let total = firstName.length        // length always start whith 1 index
console.log(total);

// Find the last index

let lastValue = firstName.length-1
console.log(lastValue);

// Find the perticular index value

console.log(firstName[4]);




// Useful string methods

// 1) trim() :- To remove the extra spaces or It remove the wide space from both side

let Demo = "        Ankit       "
console.log(Demo.length-1);
let test =Demo.trim()
console.log(test.length-1);

// 2) toUpperCase():- Convert all string into upper case

console.log(Demo.toUpperCase());

// 3) toLowerCase():- Convert all string into lower case

console.log(Demo.toLowerCase());



// 4) Escape Sequence Charactor

// a) \'
// b) \"
// c) \\

let abc = "Hello my name is Harshit and i have lot\"s of apples"
console.log(abc);


// 5) Finding Starting in a String

let har = "Hello My name is Ankit"
console.log(har.indexOf('Ankit', 3));

// or

console.log(har.indexOf('e', 1));

// or

console.log(har.lastIndexOf('i'));


// 6) Search: - It gives the index value

let qwe = "Hi Harshit how are you"
console.log(qwe.search("Harshit"));

// 7) slice method:- It takes two parameaters (start,end-1) (Extracting String Parts)

// Three methods to extracting string parts

// a) slice (start,end-1)
// b) substring (start,end-1) :- We cannot add negative value but we see the starting value
// c) substr (start,end-1): - We can add negative alone value and we cannot see the starting value
// eg: - console.log(wer.substr(-2)); :- it will give the last value

let wer = "Apple,banana,mango,kiwi"
console.log(wer.slice(0, 2));

// or

// if we use - parameaters so it will remove last value and print rest of them

console.log(wer.slice(0, -2));

// if we give only one parameater so from there it will print whole string

console.log(wer.slice(5));

// or

console.log(wer.substring(0, 2));

// or

console.log(wer.substr(0, 2));


// 8) Replacing string Content

let ert = "Hello my name is Ankit"
console.log(ert.replace("Ankit", "Harshit"));

// 9) Extracting String Character

// a) charAt(position)
// b) charCodeAt(position)
// c) Property access []

// a) charAt(position) :- Its start with Zero index

let rty = "Hello Harshit"
console.log(rty.charAt(4));

// b) charCodeAt(position):- Its return the unique code of the last character 

console.log(rty.charCodeAt(5));

// c) Property access []: - Used in ECMA5

console.log(rty[0]);


// 9) Contact Method: - Combine String

let tty = "Harshit"
let qqw = "Singh"
console.log(tty.concat(qqw));



// 10) Convert String into Array

let yyu = "Hi harshit how are you"
console.log(yyu.split(" "));
console.log(yyu.split("i"));
console.log(yyu.split(" ",2));  // (2) ['Hi', 'harshit']
// console.log(yyu.split("i",1));  ['H']


// 11) Convert number into string
let zas = 25
console.log(typeof(zas+""));

// 12) Convert string into number

let poi = +"45"                 // add + in any string to convert into string
console.log(typeof(poi));

// Or

poi = Number(poi)
console.log(typeof(poi));
