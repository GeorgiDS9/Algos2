// 1. 
function removeVowels (str){
  let arr = str.split('');
  let newArr = [];
  let newStr;
  for (let i = 0; i<arr.length; i++){
    if (arr[i] === 'a' || arr[i] === 'o' || arr[i] === 'e' || arr[i] === 'u' || arr[i] === 'i' ) {
     continue;
    } else {
     newArr.push(arr[i]);
     newStr = newArr.join(' ');
     
    }
  }
  return newStr;
}

console.log(removeVowels ('hdahfgoudh'));

// 2. 
function sum (arr, target){
  const newArr =[];
  for (let i = 0; i < arr.length; i++){
  	if (arr[i] + arr[i+1] === target){
    	newArr.push(i, i+1);
    }
  }
  return newArr;
}

console.log(sum([0,2,3], 5));
 
// 3. 
function wordLength (str){
  let sum = 0;
   for (let i = str.length-1; i > 0; i--){
     if(str[i] === ' ') {
      return sum;
    } else {
      sum ++;
    }
   }
   return sum;
  }
  
  console.log(wordLength ('how are you'));

// 4. Palindrome 
function palindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  for (var i = 0; i < str.length/2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        return false;
    }
  }
  return true;
 }

console.log(palindrome ('malayalam'));

// Second version:
const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false

// 5. 
var arrayStringsAreEqual = function(word1, word2) {
  str1 = '';
  for (let i = 0; i < word1.length; i++){
  str1 = str1.concat(word1[i]); // str1 += word1[i];
  }

  str2 = '';
  for (let j = 0; j < word2.length; j++){
  str2 = str2.concat(word2[j]); // str1 += word2[j];
  }
  
  if (str1 === str2){
      return true;
  } else {
      return false;
  }
}

// 6. 
var runningSum = function(nums) {
  let sum = 0;
  let arr = [];
  for (let i = 0; i < nums.length; i++){
      sum += nums[i]
      arr.push(sum);
  }
  return arr;
};

// 7. ???
// String.prototype.shuffle = function () {
//   var a = this.split(""),
//       n = a.length;

//   for(var i = n - 1; i > 0; i--) {
//       var j = Math.floor(Math.random() * (i + 1));
//       var tmp = a[i];
//       a[i] = a[j];
//       a[j] = tmp;
//   }
//   return a.join("");
// }

// 8.
var numIdenticalPairs = function(nums) {
  total = 0;
  for (let i = 0; i < nums.length; i++){
      for (let j = i+1; j<nums.length; j++){
           if (nums[i] === nums[j]) {
          total ++;
           }
      }
  }
   return total;
};

// 9.
var numberOfSteps  = function(num) {
  let steps = 0;
while (num > 0) {
   if (num % 2 === 0) {
     num /= 2;
     steps++;
   } else {
     num--;
     steps++;
   }
 }
 return steps;
}
// 9.
var smallerNumbersThanCurrent = function(nums) {
  const arr = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++){
      for (let j = 0; j < nums.length; j++){
          if (j !== i && nums[j] < nums[i]){
              count += 1;  
          }
          arr.push(count);
      }
  }
  return arr;
};

// 10.
var kidsWithCandies = function(candies, extraCandies) {
  let max = candies[0];
 for (let i = 1; i < candies.length; i++){
      if(candies[i] > max){
          max = candies[i];
      }
 }
  console.log(max)
  const arr = [];
  for (let i = 0; i < candies.length; i++){
      if (parseInt(candies[i]) + parseInt(extraCandies) >= max){
          arr.push(true);
      } else {
          arr.push(false);
      }
  }
  return arr;
};

// 11.
var balancedStringSplit = function(s) {
  let count = 0;
  let ret = 0;
  for (let i = 0; i < s.length; i++){
      if(s.charAt(i) === 'L'){
        count ++;
    } else {
        count --;
    }
      //  console.log(count)
      // console.log(s.charAt(i))
      
      if(count === 0){
        ret ++;
      }
  }
  return ret;
};

// i = 0;
// R
// count = -1;
// ret = 0;

// i = 1;
// L
// count = 0;
// ret = 1;

// 12.
var reorderSpaces = function(text) {
  let totalSpaces = text.length - text.replace(/[ ]/gi, "").length;
  let wordsArr = text.split(" ").filter((word) => word !== "");
  if (wordsArr.length === 1) {
    return wordsArr[0] + " ".repeat(totalSpaces);
  }
  let remainingSpaces = totalSpaces % (wordsArr.length - 1);
  let equalSpaces = Math.floor(totalSpaces / (wordsArr.length - 1));
  let spacecBetween = " ".repeat(equalSpaces);
  let lastSpaces = " ".repeat(remainingSpaces);

  return wordsArr.join(spacecBetween) + lastSpaces;
};

// 13.
var shuffle = function(nums, n) {
  let result = [];
  for(let i = 0; i < n; i++){
      result.push(nums[i]);
      result.push(nums[i+n]);   
  }
  return result;
};

// 14. v1
let subtractProductAndSum = function(n) {
  n = n + '';
  let s = 0;
  let p = 1;
  for (let i = 0; i < n.length; i++){
      p *= +n[i];
      s += +n[i];
  }
  return p-s;
};

// 14. v2
let subtractProductAndSum = function(n) {
  let digits = n.split('');
  let prod = digits.reduce((a, b) => a * parseInt(b), 1);
  let sum = digits.reduce((a, b) => a + parseInt(b), 0);
  return prod - sum;
};

subtractProductAndSum('456');

// 15. 
let countConsistentStrings = function(allowed, words) {
  let count = 0;
  for (let word of words){
       let includes = false;
      for (let c of word){
         if (!allowed.includes(c)){
             includes = false;
             break;
         } else {
             includes = true;
         }
      }  
      if (includes) {
          count ++      
      }
  }
  
  return count;
};