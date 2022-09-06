//const foo = require('./src/index.js');
import foo from './src/index.js';

test('[3] should result in "3"', () => {
    let x = foo();
    expect(x).toBe(3);
  });
