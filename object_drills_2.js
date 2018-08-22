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


