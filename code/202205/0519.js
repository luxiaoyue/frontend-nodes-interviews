function getDeep() {
  try {
    return 1 + getDeep();
  } catch {
    return 1;
  }
}

console.log(getDeep());
