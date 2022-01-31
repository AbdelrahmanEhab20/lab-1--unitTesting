//problem 1

function capitalizeText(input) {
    if (typeof input !== "string") {
        throw new TypeError("parameter should be string");
    }
    return input.toUpperCase();
}

//problem 2

function createArray(number) {
    const myArray = Array.from(Array(number).keys());
    return myArray;
};
//test that the return value of type array
//test if we pass 3 it will return array of length 3 and test it's include 1
//make a variable and  it by 1 and before each test increase it by one and pass it to every function call
//Bonus-->//try to delay the testing process 5 seconds 
//try to use different styles (expect , should , assert)
//Bonus--> //after finishing your test process try to  run it on a browser
//make pending test case

module.exports = { capitalizeText, createArray };