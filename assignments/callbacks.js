// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
// items.push("Juice Box");
// **For Fun**: I added Juice Box to be the last
// item. Uncomment to see what happens in some challenges.

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  return cb(arr.length);
}


const seeLength = getLength(items, itemCount => `I have ${itemCount} items's!`);
console.table(seeLength);

//--------------------------------------------------------------------

function last(arr, cb) {
  return cb(arr[arr.length -1])
  // last passes the last item of the array into the callback.
}

const lastItem = last(items, showLastItem => `${showLastItem} will be the last item in the array!`);
console.table(lastItem);

//--------------------------------------------------------------------

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y)
}
sumNums(2773,495, add => {console.log(add);});



function multiplyNums(x, y, cb) {
  cb(x * y)
  // multiplyNums multiplies two numbers and passes the result to the callback.
}
multiplyNums(15,40, multi => {console.log(multi);});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item))}
  console.log(contains("ball", items,))
