module.exports = function map(arr, fn) {
  return arr.reduce((acc, curr) => {
    acc.push(fn(curr));
    return acc;
  }, []);
}
