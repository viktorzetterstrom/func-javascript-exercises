function duckCount(...args) {
  return args.reduce((accumulator, current) =>
    Object.prototype.hasOwnProperty.call(current, 'quack')
      ? accumulator + 1
      : accumulator
      , 0);
}

module.exports = duckCount


var notDuck = Object.create({quack: true})
var duck = {quack: true}

console.log(duckCount(duck, notDuck));
