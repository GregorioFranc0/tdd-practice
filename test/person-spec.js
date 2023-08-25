const { expect } = require('chai');
//const expect = chai.expect;
const { person } = require('../problems/person');
const Person = require('../problems/person');

describe('Person', () => {
    it('should have a name and age property in the constructor', () => {
        const katie = new Person('katie', 22)
        expect(katie.name).to.equal('katie');
        // expect(katie.name).to.equal(String)
        expect(katie.age).to.equal(22);
        // if (katie.name !== (typeof 'string')) {
        //     throw new Error('name is not a string of letters')
        // }
    })

})
describe('say hello', () => {
    it('should return a string with persons name and greeting', () => {
        const katie = new Person('katie', 22);
        const greeting = katie.sayHello();
        expect(greeting).to.equal('Hello katie');
    })
});
