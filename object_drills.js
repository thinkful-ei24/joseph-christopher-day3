const tests = require('./object_drill_tests.js');

const createMyObject = function () {
  return {};
};

function updateObject(obj) {
  return {};
}

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: null,
  };
  return person;
}

const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

function keyDeleter(obj) {
  return {};
}

function makeStudentsReport(data) {
  // your code here
}







tests.testCreateMyObject(createMyObject);
// tests.testUpdateObject(updateObject);
// tests.testPersonMaker(personMaker);
// tests.testKeyDeleter(keyDeleter);
// tests.testIt(makeStudentsReport);



