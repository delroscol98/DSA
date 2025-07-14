export function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let temp = nums[1];
    let j;
    for (j = i - 1; nums[j] > temp && j >= -1; j--) {
      nums[j + 1] = temp;
    }
    nums[j + 1] = temp;
  }
  return nums;
}
