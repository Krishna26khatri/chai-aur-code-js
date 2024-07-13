class user{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get password(){
      //return this._password.toUpperCase()
      return `${this._password}hitesh`
    }

    // get k sath set bhi lagana jaruri hai

    // set me hum kisi bhi value ko set kar sakte hai jaise ki password ko encrypt kar sakte hai hum =>print to get vali value he hogi
    set password(value){
       this._password = value
    } // maximum call stack size exceeded (ERROR)

    get email(){
      return this._email
    }
    set email(value){
        this._email = value.toUpperCase()
    }
}

const hitesh = new user("hitesh67@gmail.com","4587abdf")
//console.log(hitesh.password)
console.log(hitesh.email)
