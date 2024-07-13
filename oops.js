const user={
    username: "krishna",
    logincount: 8,
    signedin:true,

    getuserdetails:function(){
      //  console.log("Got user details from database")
     // console.log(`username: ${username}`)  // this lagana important hai =>this current context btata hai
     // console.log(`username: ${this.username.toUpperCase()}`)
     console.log(this)
    }
    
}

console.log(user.username)
console.log(user.getuserdetails())
console.log(this)


const userone = new User("LNK",12,true)
console.log(userone)
const usertwo = new User("Mamta",21,false)
console.log(usertwo)
console.log(userone)


function User(username, logincount,isloggedin){
    this.username = username
    this.logincount = logincount
    this.isloggedin = isloggedin

    this.greeting = function(){
console.log(`Welcome,${this.username}`)
    }

    return this
}

// const userone = User("LNK",12,true)
// console.log(userone)
// const usertwo = User("Mamta",21,false)
// console.log(usertwo)
// console.log(userone) // ab is userone me usertwo ki properties over write ho gyi hai =>ise htane k liye use new keyword

// new keyword naya instance create karta hai 

// console.log(userone.greeting
console.log(userone.greeting())
console.log(usertwo.greeting())