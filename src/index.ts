/*
interface는 오류때문에 js로 컴파일 되지 않는다
interface를 컴파일된 js에 보이고 싶을 때 class를 사용!
*/
class Human {
    public name: string;
    public age: number;
    public gender: string;

    constructor(name:string, age:number, gender?:string){ // ?는 중간에는 못쓴다 -> 맨마지막이나 끝부터 연속적으로만 가능
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const Nick = new Human('Nick',21,'male');

const sayHi = (person:Human) :string => {
    return `Hello, ${person.name}! Your age is ${person.age} and gender is ${person.gender}.`;
}

let result = sayHi(Nick);
console.log(result);

export {};