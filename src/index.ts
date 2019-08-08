const name = 'HeeYou',
    age = 25,
    gender = 'female';

const sayHi = (name:string, age:number, gender:string) :string => {
    return `Hello, ${name}! Your age is ${age} and gender is ${gender}.`;
}

let result = sayHi('Judy', 17, 'female');
console.log(result);

export {};