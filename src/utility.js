
const util = require('util');

const formattedString = util.format('Hello %s!', 'world');
console.log(formattedString); // Output: Hello world!


const obj = { name: 'NIKITA', age: 22 };
console.log(util.inspect(obj, { showHidden: false, depth: null }));
