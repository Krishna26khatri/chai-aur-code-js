// ES6 Ecma script 6

// class User{
// constructor(username,email,password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// encryptpassword(){
//     return `${this.password}`
// }

// changeusername(){
//     return`${this.username.toUpperCase()}`
// }

// }

// const chai =  new User("chai","chai@gmail.com","45863")
// // class constructor cannot be invoked without new =>new lagana jaruri hai
// console.log(chai)
// console.log(chai.encryptpassword())
// console.log(chai.changeusername())

// Behind the scene (BTS)

function User(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptpassword = function(){
    return `${this.password}abvfg`
}

User.prototype.changename = function(){
    return`${this.username.toUpperCase()}`
}

const tea = new User("tea","tea@fb.com","458")
console.log(tea)
console.log(tea.encryptpassword())
console.log(tea.changename())