// document.getElementById('thirdimg').onclick=function(){
//     alert('Third iamge')
// }

// attachEvent()
// jQuery - on

//type, timestamp, defaultprevneted
//target, toElement, srcElement, currentTarget
//clientX, clientY, screenX, screenY
//altkey, ctrlkey, shiftkey, keyCode

// document.getElementById('images').addEventListener('click',function(e){
//     console.log("Click inside the ul")
// },false)

// document.getElementById('thirdimg').addEventListener('click',function(e){
//     console.log("Click inside image")
// alert('image clicked')
// e.stopPropagation() // used to prevent propagation => upar block vala code execute nhi hoga
// },false)


// // on clicking google, don't open the link => prevent default action 
// document.getElementById('google').addEventListener('click',function(e){
//     e.preventDefault()
//     console.log("Google clicked")
// },false)


document.querySelector('#images').addEventListener('click',function(e){
    console.log(e)
    console.log(e.target.parentNode)
    console.log(e.target.tagName)
    if(e.target.tagName==='IMG'){
        console.log(e.target)
        let removeit = e.target.parentNode
        removeit.remove()
    }
    
  // removeit.parentNode.removeChild(removeit)
})