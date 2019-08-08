interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: 'HeeYou',
    age: 25,
    gender: 'female'
};

const sayHi = (person:Human) :string => {
    return `Hello, ${person.name}! Your age is ${person.age} and gender is ${person.gender}.`;
}

let result = sayHi(person);
console.log(result);

export {};