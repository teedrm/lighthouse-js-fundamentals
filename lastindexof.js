var lastIndexOf = function(array, value) {
for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
    return i;
    }
}
return -1; 
};

  console.log(lastIndexOf([0, 1, 4, 1, 2], 1));  //  3
  console.log(lastIndexOf([0, 1, 4, 1, 2], 2));  //  4
  console.log(lastIndexOf([0, 1, 4, 1, 2], 42)); // -1