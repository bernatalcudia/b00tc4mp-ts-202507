import { add, sub, mul, div } from "./calc"


console.log("Hello, World!")


console.log(add(1, 2))
console.log(sub(1, 2))
console.log(mul(1, 2))
console.log(div(1, 2))

/*
let vane:{ name: string; age: number; city: string; };
vane = { name: "Vanessa", age: 30, city: "New York" };
*/

/*
let vane = { name: "Vanessa", age: 30, city: "New York" };
vane = { name: "Vanessa", age: 30, city: "New York" };

let rares:typeof vane;
rares = { name: "Rares", age: 25, city: "Bucharest" };

type Person = typeof vane;

let mario: Person;
mario = { name: "Mario", age: 28, city: "Rome" };

let berni: Person;
berni = { name: "Berni", age: 22, city: "Berlin" };
*/


// type Person = { name: string; age: number; city: string; }
interface Person { name: string; age: number; city: string; country?: string; }

let vane: Person = { name: "Vanessa", age: 30, city: "New York" };
let rares: Person = { name: "Rares", age: 25, city: "Bucharest" };
let mario: Person = { name: "Mario", age: 28, city: "Rome" };
let berni: Person = { name: "Berni", age: 22, city: "Berlin" };

//type IWorkder = Person & { work(): void; };
interface IWorkder extends Person {
    work(): void;
}

class Worker implements IWorkder {
    name: string;
    age: number;
    city: string;
    country?: string;

    constructor(name: string, age: number, city: string, country?: string) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.country = country;
    }

    work() {
        console.log(`${this.name} is working.`);
    }
}

let alice = new Worker("Alice", 32, "London", "UK");
alice.work(); // Outputs: Alice is working.

console.log(alice instanceof Worker); // Outputs: true
