const clock = document.querySelector('#clock')
//const clock = document.getElementById('clock')
// dodno me se koi bhi use kar sakte hain

// let date = new Date()
// console.log(date.toLocaleTimeString())

setInterval(function(){
 let date = new Date()
 //console.log(date.toLocaleTimeString())
 clock.innerHTML = date.toLocaleTimeString()
},1000)