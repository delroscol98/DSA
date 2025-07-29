export function quickSort(arr, start, end) {
  if (end - start + 1 <= 1) {
    return arr;
  }

  let pivot = arr[end];
  let left = start;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      let temp = arr[left];
      arr[left] = arr[i];
      arr[i] = temp;
      left++;
    }
  }

  arr[end] = arr[left];
  arr[left] = pivot;

  quickSort(arr, start, left - 1);
  quickSort(arr, left + 1, end);

  return arr;
}
