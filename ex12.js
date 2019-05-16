function Spy(target, method) {
  let result = {
    count: 0
  }

  const origFunc = target[method];
  target[method] = (...args) => {
    result.count++;
    return origFunc.call(target, ...args);
  }

  return result
}

module.exports = Spy
