const buttons =  document.querySelectorAll('.button')
const body = document.querySelector('body')
const htwo = document.querySelector('h2')

buttons.forEach(function(button){
   // console.log(button)
   button.addEventListener('click',function(e){
     //  console.log(e)
     //  console.log(e.target)

     if(e.target.id==='orange')
     body.style.backgroundColor="orange"
      if(e.target.id==='yellow')
     body.style.backgroundColor="yellow"
     if(e.target.id==='green')
     body.style.backgroundColor="green"
     if(e.target.id==='black'){
     body.style.backgroundColor="black"
     htwo.style.color = "white"
     }
   })

})
