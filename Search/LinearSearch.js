function linearSearch(haystack, needle) {
  if (!haystack.length) return false;
  for (const num of haystack) {
    if (num == needle) return true;
  }
  return false;
}
