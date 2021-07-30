/**
 * Write a function that takes two numbers and returns
 * the sum of those numbers
 */
function add(summandA, summandB) {
  if (!Number.isInteger(summandA) || !Number.isFinite(summandB)) return;
  return summandA + summandB;
}

console.log("add", add(2, 3)); // Expects 5

/**
 * Write a function that takes any number of arguments 
 * of type number and return the sum of all the arguments
 */
function sum(...args) {
  let result = 0;
  args.forEach(num => {
    if(Number.isInteger(num)) result += num;
  });
  return result;
}

// Old School Way
function sumAlternative() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    // not arguments.i
    if(Number.isInteger(arguments[i])) result += arguments[i];
  }
  return result;
}
console.log("sum", sum(2, 3, 4, 5)); // Expects 14
//console.log("sumAlternative", sumAlternative(2, 3, 4, 5)); // Expects 14





/**
 * Write a function that takes two strings, A and B
 * and returns whether B is in A in a case-insensitive way
 */
function stringIncludes(stringA, stringB) {
  return stringA.toLowerCase().includes(stringB.toLowerCase());
}

console.log(
  "stringIncludes",
  stringIncludes("I drove to New York in a van", "new")
);



/**
 * Write a function that takes an array of objects, and return an array
 * of the objects' "name" property, only if that property exists
 */
function getNames(objsArr) {
  let resArr = [];
  if (objsArr) {
    objsArr.forEach(obj => { if(obj.name) { resArr.push(obj.name);} });
  }
  return resArr;
}

// Better alternative
function getNamesAlternative(objsArr) {
  let resArr = [];
  if (objsArr) {
    objsArr.forEach(obj => { if(obj.hasOwnProperty('name')) { resArr.push(obj.name);} });
  }
  return resArr;
}

console.log(
  'getNames',
  getNames([
    { a: 1 },
    { name : 'Jane' },
    {},
    { name : 'Mark' },
    { name : 'Sophia' },
    { name : null },
    { b: 2 },
  ])
);

/**
 * Write a function that takes an array of numbers and returns the
 * index of the largest number
 */
function getLargestNumberIndex(nums) {
  let tmp;
  nums.forEach(num => {
    if (Number.isInteger(num)) {
      if (!tmp) tmp = num;
      else tmp = Math.max(tmp, num)
    }    
  });
  return nums.indexOf(tmp); 
}
console.log("getLargestNumberIndex", getLargestNumberIndex([7, 1, 4, 12, 9])); // Expects 3


/**
 * Write a function that returns a promise that resolves
 * after n number of milliseconds
 */

function delay(n) {
  return new Promise((resolve, reject) => {
    if (!Number.isInteger(n) && n) reject("Argument must be an Integer");
    setTimeout(resolve, n);
  });

}

/** The console.time() method starts a timer you can use to track how long an operation takes.
*   You give each timer a unique name, and may have up to 10,000 timers running on a given page.
*   When you call console.timeEnd() with the same name, the browser will output the time,
*  in milliseconds, that elapsed since the timer was started.
*/
(async () => {
  console.time("Testing delay");
  await delay(1000).then(() => console.log("Resolved."), () => console.log("Rejected."));
  console.timeEnd("Testing delay");
})();

(async () => {
  console.time("Testing delay rejected");
  await delay('h').then(() => console.log("Resolved."), () => console.log("Rejected."));
  console.timeEnd("Testing delay rejected");
})();