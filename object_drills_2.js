const loaf = {
    flour: 300, 
    water: 210,
    hydration: function(){
     return this.water / this.flour * 100;  
    }
};
console.log(loaf.hydration());

const boxOfStuff = {
    foo: 'foo',
    bar: 88,
    fum: null,
    quux: false,
    spam: function(){
        console.log('What the f is quux?');
    }
}
for(let item in boxOfStuff){
    console.log(`${item}: ${boxOfStuff[item]}`);
}

const Obj = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}

console.log(Obj.meals[3]);

const people = [
  { name:  'bob',
    jobTitle: 'plumber'
  },
  { name:  'jim',
    jobTitle: 'hr',
    boss: 'bob'
  },
  { name: 'carl',
    jobTitle: 'safety inspector',
    boss: 'bob'
  },
];

for (const person of people){
  if(!person.boss){
    console.log(`${person.jobTitle} ${person.name} doesn't report to anybody.`);
  } else {
    console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}.`);
  }
}

const codedMessage = 'craft block argon meter bells brown croon droop';

const cipher = {
  a:	2,
  b:	3,
  c:	4,
  d:	5
};

function decode(word){
  if(cipher.hasOwnProperty(word[0])){
    return word[cipher[word[0]] - 1];
  }
  return ' ';
}
function decodeWords(sentence){ 
  let decoded = '';
  let sentenceArr = sentence.split(' ');
  for(const word of sentenceArr){
    decoded += decode(word);
  }
  return decoded;
}

console.log(decodeWords(codedMessage));

