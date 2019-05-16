function logger(namespace) {
  return (...messages) => console.log(namespace, ...messages);
}

module.exports = logger