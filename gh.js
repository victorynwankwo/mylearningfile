
const userName = document.getElementById("username")
const profile = document.getElementById("profile")
const divi = document.getElementById ("text")


const colors = ["orange", "blue","green", "red", "indigo","brown","indigo","pink", "purple", "gold", "wheat","magenta", "white"]
function createdUser(){
if(!userName.value){
     return   alert("You must input something")
    }
const num = Math.floor(Math.random()* colors.length)
    profile.style.background = colors[num]
       const selectedColor = colors[num]
    
       profile.style.color = selectedColor.value
    let firstName = userName.value.split(" ").map((e)=> e[0]).join(" ").slice(0,3).toUpperCase()
        profile.innerHTML = firstName 
     divi.innerHTML = selectedColor
     divi.style.color = selectedColor
   
}

function reset(){
  userName.value = ""
  profile.innerHTML = ""
  divi.innerHTML = ""
  profile.style.backgroundColor = "wheat"
  divi.style.color = ""
  divi.innerHTML = ""
}