var expect = chai.expect;
const assert = chai.assert;


// const should = require("chai").should();



describe("Testing capitalizeText", function () {
    it("test that the function takes a string  it will return a string"
        , function () {
            expect(capitalizeText("string")).to.be.string("");
        });
    it("test that the function takes a string  it will return a string with uppercase"
        , function () {
            expect(capitalizeText("iti")).to.be.equal("ITI");
        });
    it("throw error"
        , function () {
            expect(function () {
                capitalizeText(666)
            }).to.throw(TypeError, 'parameter should be string')
        });
    it("the input iti , the returned value  will not equal to hello"
        , function () {
            expect(capitalizeText("iti")).to.be.not.equal("hello");
        });
});
var num = 0;
describe("Testing CreateArray", function () {
    //  make a variable and initialize it by 1 and before each test increase it by one and pass it to every function call
    beforeEach(function () {
        num++;
        console.log("increased Num before:", num);
    });
    it("test that the function will return array"
        , function () {
            assert.isArray(createArray(3));
        });
    it("test that the function will return array of length 3 and test it's include 1"
        , function () {
            assert.include(createArray(3), 1);
        });

    beforeEach(function (delay) {
        setTimeout(function () {
            delay()
        }, 1000);
    })
    it("Length of array"
        , function () {
            expect(createArray(3)).to.have.lengthOf(3);
            console.log("Done TEST");
        });
});