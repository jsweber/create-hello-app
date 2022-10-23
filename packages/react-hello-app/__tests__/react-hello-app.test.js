'use strict';

const reactHelloApp = require('..');
const assert = require('assert').strict;

assert.strictEqual(reactHelloApp(), 'Hello from reactHelloApp');
console.info("reactHelloApp tests passed");
