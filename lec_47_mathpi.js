// const descriptor= Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor)

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

// const myobject = Object.create(null)
// console.log(myobject)

const chai = { 
    name:'ginger chai',
    price:250,
    isAvailable:true,

    orderchai:function(){
        console.log("Code fat gya:Chai nhi bni")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))
 console.log(chai)
// for (let [key,value] of Object.entries(chai)) {
//     console.log(`${key}:${value}`)
// }
// console.log('\n')
Object.defineProperty(chai,'name',{
    writable:true,
    enumerable:false
})
chai.name = 'adarak chai'
// console.log(Object.getOwnPropertyDescriptor(chai,"name"))
// console.log(chai)

// chai is not iterable => object pe forof loop nhi lag payega isliye chai ki jagah objectentries(chai)likhna padega 
for (let [key,value] of Object.entries(chai)) {
if(typeof value!=='function'){
    console.log(`${key}:${value}`)
}
} // iske output me function nhi chahiye us case me if else laga do