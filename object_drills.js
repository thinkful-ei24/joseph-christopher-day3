const tests = require('./object_drill_tests.js');

const createMyObject = function () {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: () => 'hello'
  };
};

function updateObject(obj) {
  obj.foo  = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;
}

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function () { return `${this.firstName} ${this.lastName}`;}
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
  delete obj.foo;
  delete obj.bar;
  return obj;
}

function makeStudentsReport(data) {
  let hold =[];
  for(let item of data){
    hold.push(`${item['name']}: ${item['grade']}`)
  };
  return hold;
}

function enrollInSummerSchool(students) {
  students.forEach(student => student.status ='In Summer school' )
  return students;
}

function findById(items, idNum) {
  return items.find(item => item.id === idNum);
}

function validateKeys(object, expectedKeys) {
  for (let key of expectedKeys){
    if(!object.hasOwnProperty(key)){return false;}
  }
  for (const key in object){
    if(!expectedKeys.includes(key)){return false;}
  }
  return true;
}

tests.testCreateMyObject(createMyObject);
tests.testUpdateObject(updateObject);
tests.testPersonMaker(personMaker);
tests.testKeyDeleter(keyDeleter);
tests.testIt(makeStudentsReport);
tests.testIt2(enrollInSummerSchool);
tests.testIt3(findById);
tests.testIt4(validateKeys);



