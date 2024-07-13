let username = "Krishna khatri"
console.log(`Welcome, ${username.trim()}`); // used to remove the unwanted space 

let firstname = new String("Krishna") // another way to declare string
let lastname="khatri"
console.log(firstname + " "+ lastname) // used to concatenate the strings

// operations on string
console.log(username.length)
console.log(username.toUpperCase())
console.log((username.charAt(3)).toUpperCase())
console.log(username.toLowerCase())
console.log((username.toLowerCase()).indexOf('k'))
console.log(username.indexOf('i'))

 // or we can concatenate strings in better way using spread operator
 let fullname={...firstname,...lastname}
console.log(`Fullname of the user is ${fullname}`);

const tutorname = new String("Hitesh Choudhary chai aur code js playlist")
console.log(tutorname.substring(0,21)) // substring k parameter me negative values nhi daal sakte hai

console.log(tutorname.slice(12,-6)) // isme negative value daal sakte hai but only in second parameter

const url="https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('choudhary','khatri').replace('hitesh','krishna').replace('hitesh','krishna')) 
// mind game jo ki mne khela string me 2 values ko replace karne k liye.....mjaa aaya heheee



