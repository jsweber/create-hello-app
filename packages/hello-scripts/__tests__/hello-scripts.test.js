'use strict';

const helloScripts = require('..');
const assert = require('assert').strict;

assert.strictEqual(helloScripts(), 'Hello from helloScripts');
console.info("helloScripts tests passed");
