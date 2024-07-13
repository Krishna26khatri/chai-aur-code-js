// Promise creation
const promiseone = new Promise(function (resolve, reject) {
    // do an async task
    //DB calls , cryptography , network
    setTimeout(function () {
        console.log('Async task one is completed')
        resolve() // resolve or then ko connect karne k liye
    }, 1000)
})

// Promise consume
promiseone.then(function () {
    console.log('promise one consumed')
})


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task two is completed')
        resolve()
    }, 3000)
}).then(function () {
    console.log('promise two consumed')
})


const promisethree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Krishna", email: "krishna45@gmail.com", phoneno: 45678933 })
    }, 1000)
})

promisethree.then(function (user) {
    console.log(user.username)
})


const promisefour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "Krishna", email: "krishna45@gmail.com", phoneno: 45678933 })
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promisefour.then((user) => {
    console.log(user)
    return user.phoneno // or we can print console.log(user.phoneno)
}).then((phoneno) => {
    console.log(phoneno)
}).catch((e) => {
    console.log(e)
}).finally(() => {
    console.log('The promise is either resolved or rejected')
})


const promisefive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javascript", email: "krishna45@gmail.com", phoneno: "java78933" })
        }
        else {
            reject('ERROR: Javascript went wrong')
        }
    }, 1000)
})

async function consumepromisefive(){
    try {
        const response = await promisefive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
   
}

consumepromisefive()