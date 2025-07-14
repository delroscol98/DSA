export function selectionSort(nums) {
  let min = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = nums[min];
      nums[min] = nums[i];
      nums[i] = temp;
    }
  }
  return nums;
}
