//We add up the values within the array.
//Then we use Formula for N natural numbers to calculate what it should be based on N
// Then subtract. Output is the missing number so we return it.
function getMiss(x, n) {
  
    let total = Math.floor( (n + 1)*n/2);
    let sum =0;
    for (let i = 0; i < n; i++)
    sum += x[i];
    total-= sum;
    return total;
}

let array1 = [ 3,0,1 ];
let N1 = array1.length;
let missing = getMiss(array1, N1);
let array2 = [9,6,4,2,3,5,7,0,1];
let N2= array2.length;
let missing2 = getMiss(array2, N2);
let array3 = [0,1];
let N3= array3.length;
let missing3 = getMiss(array3, N3);

//Output values
console.log("If input="+array1+ " then:");
console.log(missing);
console.log("If input="+array2+ " then:");

console.log(missing2);
console.log("If input="+array3+ " then:");

console.log(missing3);