// Section 18 - Data Structures Introduction

// ES15 introduced class like structures. They use prototype-based inheritence 

//Object Oriented Programming 

class Student { // CamelCase - start with capital letter
    constructor(firstName, lastName, year){ //method to create new objects must be called 'constructor'
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year 
        this.tardies = 0
    }

    fullName() {//instance method
        return `Your fulle name is ${this.firstName} ${this.lastName}.`
    }
    markLate() {//instance method
        this.tardies += 1; 
        if (this.tardies >= 0){
            return `you are suspended!!`
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies}!`
    }

    static enrollStudents(...students){ //class method 
        return `ENROLL STUDENTS`
    }
}

let firstStudent = new Student("Colten", "Appleby") // year will be undefined
let secondStudent = new Student("Colt" , "Steele", 10) // year will be 10
console.log(firstStudent.fullName)

Student.entrollStudents([firstName, lastName])
console.log(entrollStudents)