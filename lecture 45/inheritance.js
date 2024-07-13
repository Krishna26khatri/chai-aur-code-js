class student{
    constructor(username){
    this.username = username
    }

    LogMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class teacher extends student{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    teacherlogin(){
        console.log(`Teacher successfully login.\nWelcome,${this.username}`)
    }

    teacheraddcourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

// // class constructor cannot be invoked without new =>new lagana jaruri hai
const Premnath =  new teacher("Premnath","premnath45@gmail.com","458")
console.log(Premnath)
console.log(Premnath.LogMe())
console.log(Premnath.teacheraddcourse())
console.log(Premnath.teacherlogin())

const Krishna = new student("Krishna","krishna34@gmail.com","1236")
console.log(Krishna)
console.log(Krishna.LogMe())
// console.log(Krishna.teacheraddcourse())
// console.log(Krishna.teacherlogin())

console.log(Premnath===teacher)
console.log(Premnath===Krishna)
console.log(Krishna===student)
console.log(teacher instanceof student)
console.log(Krishna instanceof student)
console.log(Premnath instanceof student)
console.log(Premnath instanceof teacher)