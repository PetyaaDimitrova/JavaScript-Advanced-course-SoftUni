
class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    
}


let person1 = new Person('Anna', 'Simpson', '22', 'anna@yahoo.com');
let person2 = new Person('SoftUni');
let person3 = new Person('Stephan', 'Johnson', '25');
let person4 = new Person('Gabriel', 'Peterson', '24', 'g.p@gmail.com');

let students = [];
students.push(person1);
students.push(person2);
students.push(person3);
students.push(person4);


console.log(students);