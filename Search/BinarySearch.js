function binarySearch(target, array) {
  let min = 0;
  let max = array.length - 1;
  let mid;
  let element;

  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    element = array[mid];

    if (element < target) {
      min = mid + 1;
    } else if (element > target) {
      max = mid - 1;
    } else {
      return element;
    }
  }

  return null;
}

function binarySearch2(nums, target) {
  let lo = 0;
  let hi = nums.length;
  do {
    let mid = Math.floor(lo + (hi - lo) / 2);
    let current = nums[mid];
    if (current === target) return current;
    else if (current > target) hi = mid;
    else lo = mid + 1;
  } while (lo < hi);
  return null;
}
