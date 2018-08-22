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
};
for(let item in boxOfStuff){
  console.log(`${item}: ${boxOfStuff[item]}`);
}

const Obj = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

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

function createCharacter(name, nickname, race, origin, attack, defense){
  return{
    name,
    nickname,
    race, 
    origin,
    attack,
    defense,
    describe : function(){
      console.log(`${this.name} is a ${this.race} from ${origin}`);
    },
    evaluateFight : function(obj){
      const myDam = this.defense > obj.attack ? 0 : this.attack - obj.defense;
      const oppDam =  obj.defense > this.attack ? 0 : this.attack- obj.defense;
      return `Your opponent takes ${oppDam} damage and you receive ${myDam} damage`;
    }
  };
}

const characters = [createCharacter('Gandalf the White', 'gandalf','Wizard' ,'Middle Earth',10 ,6), 
  createCharacter('Bilbo Baggins', 'bilbo','Hobbit' ,'The Shire' ,2 ,1), 
  createCharacter('Frodo Baggins', 'frodo','Hobbit' ,'The Shire' ,3 ,2), 
  createCharacter('Aragorn son of Arathorn' ,'aragorn' ,'Man' ,'Dunnedain' ,6 ,8), 
  createCharacter('Legolas' ,'legolas' ,'Elf' ,'Woodland Realm' ,8 ,5)];

characters.push(createCharacter('Arwen Undomiel', 'Arwen', 'Half-Elf', 'Rivendale', 10, 6));

characters.find(function(item){
  return item.nickname === 'aragorn';
}).describe();

let hobbits = characters.filter (item => item.race === 'Hobbit');

let highAttack = characters.filter (item => item.attack > 5);

console.log(highAttack);

console.log(characters[0].evaluateFight(characters[1]));

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

const findOne = function(arr,query){
  for (const hero of arr){
    all_attr = true;
    for(const attr in query){
      if(!hero.hasOwnProperty(attr) || hero[attr] !== query[attr]){
        all_attr = false;
      }
    }
    if(all_attr){return hero;}
  }
  return null;
};

console.log(findOne(HEROES, { id: 1 }));
console.log(findOne(HEROES, { id: 10 }));
console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
console.log(findOne(HEROES, { squad: 'Justice League' }));
