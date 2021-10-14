//ES5 === ES5 === ES5 === ES5 === ES5 === ES5 === ES5 === ES5 === ES5 === ES5 === ES5 === ES5 === ES5 === ES5 ===
/* 
function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age
}

var John = new Person('John', 'Doe', 30);
console.log(John); // Person {name: "John", surname: "Doe", age: 30}

Person.prototype.sayHello = function () {
    console.log('Hello from' + ' ' + this.name)
}

John.sayHello(); //Hello from John


function Doctor(name, surname, age, problem) {
    Person.call(this, name, surname, age);
    this.problem = problem;
}
Doctor.prototype = new Person();
Doctor.constructor = Doctor;
Doctor.prototype.treat = function(){
    console.log('Your' + ' ' + this.problem + ' ' + 'is being treated')
}

var Dentist = new Doctor('Sam', 'Smith', 29, 'teeth')
Dentist.sayHello(); // Hello from Sam
Dentist.treat(); // Your teeth is being treated
//John.treat(); // Uncaught TypeError: John.treat is not a function

var Ophthalmologist = new Doctor('Henry', 'Li', 40, 'eyes');
Ophthalmologist.sayHello(); // Hello from Henry
Ophthalmologist.treat(); // Your eyes is being treated

console.log(Doctor instanceof Person); // false
console.log(John instanceof Person); // true
console.log(Dentist instanceof Person); // true
console.log(John instanceof Doctor); // false
console.log(Dentist instanceof Doctor); // true

 */

//ES6 === ES6 === ES6 === ES6 === ES6 === ES6 ===ES6 === ES6 ===  ES6 === ES6 === ES6 === ES6 === ES6 === ES6 ===


class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello from ${this.name}`);
    }
}



const John = new Person('John', 'Doe', 30);
console.log(John); // Person {name: "John", surname: "Doe", age: 30}

John.sayHello()


class Doctor extends Person {
    constructor(name, surname, age, problem) {
        super(name, surname, age)
        this.problem = problem;
    }
    treat() {
        console.log(`Your ${this.problem} is being treated`);
        
    };
}

const Dentist = new Doctor('Sam', 'Smith', 29, 'teeth');

Dentist.sayHello(); // Hello from Sam
Dentist.treat(); // Your teeth is being treated
//John.treat(); // Uncaught TypeError: John.treat is not a function


const Ophthalmologist = new Doctor('Henry', 'Li', 40, 'eyes');

Ophthalmologist.sayHello(); // Hello from Sam
Ophthalmologist.treat(); // Your eyes is being treated



console.log(Doctor instanceof Person); // false
console.log(John instanceof Person); // true
console.log(Dentist instanceof Person); // true
console.log(John instanceof Doctor); // false
console.log(Dentist instanceof Doctor); // true
