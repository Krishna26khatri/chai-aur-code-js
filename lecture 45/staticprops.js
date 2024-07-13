class user{
    constructor(username){
      this.username= username
    }
    logme(){
        console.log(`LOGME:USERNAME:${this.username.toUpperCase()}`)
    }
    // static lagane se user is function ko access nhi kar payega (Data hiding)
   static createid(){
        return '1589'
    }
}

const hitesh = new user("Hitesh")
console.log(hitesh)
//console.log(hitesh.createid())

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher("iphone","i@phone.com")
console.log(iphone)
console.log(iphone.logme())
//console.log(iphone.createid())