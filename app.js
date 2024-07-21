// 1
let arr = [1,2,3,4,5];
function reverseArr(){       
console.log("reverse Array: " + arr.reverse());
}
reverseArr( );

// 2
function removeNegativeNumbers(arr) {
    return arr.filter(function(num) {
        return num >= 0;
    });
}
let numbers = [1, -2, 3, -4, 5];
let positiveNumbers = removeNegativeNumbers(numbers);
console.log(positiveNumbers);

// 3
function vowelschar(arr) {
    return arr.filter(function(vowels) {
        return vowels = "a","e","i","o","u";
    });
}
let arr3= ["a","b","c","d","e","f","g","o","o","u"];
let vow = vowelschar(arr3);
console.log(vow);
vow();
// 4

// 5

let int1=parseInt(prompt(" give range number :"));
let int2=parseInt(prompt(" give range number :" ));;
if(int1 >= 50 && int2 <=99){
console.log("you are correct range" );
}
else {
    console.log("plzz try another number");
}
// 6 
let  arr4=[2,4,4,3,2,122,33];
function minimum(){
   console.log(arr4.minToApply());

}
minimum();