const form = document.querySelector('form')
//this below case will give empty value
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('.result')

  if(height===" " || height<0 || isNaN(height)){
      result.innerHTML = "Please enter valid Height"
      result.style.color="red"
  }
//   result.innerHTML = `${height}`

 else if(weight===" " || weight<0 || isNaN(weight)){
    result.innerHTML = "Please enter valid Weight"
    result.style.color="red"
}
else{
    const bmi = (weight/ ((height*height)/10000)).toFixed(2)
  //  show the result
         result.innerHTML = `${bmi}`
         result.style.color="white"
         console.log(`${height}`)
    // result.innerHTML = "Please enter\\\ valid Weight"
}

})

const refresh = document.querySelector('.refresh')
const content = document.querySelector('.refcontent')

refresh.addEventListener('click',()=>{
  content.innerHTML = "Hello!!"
  content.style.color="purple"
  // content.style.font-weight="bold" --> Error aa rhi hai
})