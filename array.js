let myArr = new Array(0,1,2,3,"hello","hii","byee",true,false)

myArr.push(89) //add 89 to the last of the array
 myArr.unshift(56) //add 56 to the start of the array
console.log(myArr)
myArr.pop() //delete last elemnt
myArr.shift() //delete first element

console.log(myArr.includes(3))
console.log(myArr.indexOf(9))

console.log(typeof myArr)
const newArr = myArr.join()
console.log(newArr)
console.log(typeof newArr)

// Slice and Splice
console.log(`A : [${myArr}] \n`)

console.log("Apply slice method on above array:")
const myn1 = myArr.slice(1,5)
console.log(myn1)
console.log(`B : [${myArr}] \n`)

console.log("Apply splice method on above array:")
const myn2 = myArr.splice(1,5)
console.log(myn2)
console.log(`C : [${myArr}]`)
