
//binary search

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while(left<=right){
    let mid = Math.floor((left+right)/2);
    let mid_number = array[mid]
    if(target === mid_number){
      return mid;
    }
    else if(target < mid_number){
      right = mid - 1;
    }
    else{
        left = mid + 1;
    }
  }
  return -1;
}

let numberArray = [1,2,3,4,5,6,7,8,9];

console.log(binarySearch(numberArray, 4));