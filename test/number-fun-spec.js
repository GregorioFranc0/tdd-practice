const { expect } = require('chai');

const { returnsThree, reciprocal } = require('../problems/number-fun');
//const { returns } = require('chai-spies');


describe('returnsThree', () => {

    it('should return the number 3', () => {
        expect(returnsThree()).to.equal(3);
    })
})

describe('reciprocal', () => {

    it('should return the reciprocal of a given number', () => {
        const n = 4;
        expect(reciprocal(n)).to.equal(.25);
    })
})
