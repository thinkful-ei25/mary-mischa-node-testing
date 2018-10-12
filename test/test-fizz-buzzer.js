'use strict'
const fizzBuzz = require('../fizzBuzzer');
const expect = require('chai').expect;

describe('fizzBuzztest', function () {
    it('should return fizz, buzz, fizz-buzz, or input number back', function () {


        const normalCases = [
            { a: 15, expected: 'fizz-buzz' },
            { a: 1, expected: 1 },
            { a: 3, expected: 'fizz' },
            { a: 5, expected: 'buzz' },
            { a: 3 + 4, expected: 7 },
            { a: 0.5, expected: 0.5 }
        ];
        normalCases.forEach(function (input) {
            const answer = fizzBuzz(input.a);
            expect(answer).to.equal(input.expected);
        });
    });
    it('should throw error if args are NaN', function () {
        const badInputs =
            ['3', null];
        badInputs.forEach(function (badInput) {
            expect(function () {
                fizzBuzz(badInput).to.throw(Error);
            })
        })
    })

});
