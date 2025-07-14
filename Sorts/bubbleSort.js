export function bubbleSort(nums) {
  let swapped;
  for (let i = nums.length - 1; i >= 0; i--) {
    swapped = false;
    for (let j = 0; j < i; j++) {
      if (nums[j + 1] < nums[j]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return nums;
}
