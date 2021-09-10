// Section 18 - Data Structures Introduction

// ES15 introduced class like structures. They use prototype-based inheritence 

//Object Oriented Programming 

class Student { // CamelCase - start with capital letter
    constructor(firstName, lastName, year){ //method to create new objects must be called 'constructor'
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year 
    }
}

let firstStudent = new Student("Colten", "Appleby")
let secondStudent = new Student("Colt" , "Steele")