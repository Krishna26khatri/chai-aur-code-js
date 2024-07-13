function setUserName(username){
    // complex DB calls
    this.username = username
    console.log("Called")
}

function createUser(username,email,password){
    setUserName.call(this, username)
// .call is used for hold the refernce (sirf .call likhne se bhi kaam nhi hoga)
// ye apna this upar vale function ko de rha h usme saman dalne k liye
    this.email = email
    this.password = password
}


const chai = new createUser("chai","chai@fb.com","1256")
console.log(chai)