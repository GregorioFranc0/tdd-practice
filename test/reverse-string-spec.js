const { expect } = require('chai');
//const assert = require('assert');

const reverseString = require('../problems/reverse-string');
const { describe } = require('mocha');

describe('reverseString', () => {
    it('should reverse the input of the string', () => {
        const input = 'fun';
        const res = reverseString(input);

        expect(res).to.equal('nuf');
    })
})

module.import = reverseString;
