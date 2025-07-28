const data = JSON.parse(localStorage.getItem("input"))||[]
taskData = {}
taskAdded.push(taskData)

function addTask(){
const task = prompt("Enter your Task")
if(!task){
alert("You must input a task")
    return

}
const alreadyTask = data.map((e)=> e.task)
if(alreadyTask.includes(task)){
    alert("task already exists")
}
taskData.tasks = task
taskData.isDone  = true

localStorage.setItem("input",JSON.stringify (data))
alert("Task successfuly Inputed")
}
function viewInput(){
    const viewedTask = prompt("Want to Vew your task? YES/NO")

    if(viewedTask && viewedTask.toLowerCase ==="yes"){
     const tasked = data.map((e)=> item.tasks)
     const taskAlreadyDone = data.map((e)=> e.isDone)
     alert(`These are your tasks:${tasked} is it done? ${taskAlreadyDone}`)
    }
    else{
    alert("Go back to your homepage")
    }
}
function deleteInput(){
  const del = prompt("Delete task? 1 - 10")

  if(!del || isNaN(del)){
  alert("No task will be deleted if a number is inputed")
  return
  }
  const indexNum = Number(del)- 1
  if(indexNum < 0 || index >= data.length){
   alert ("Task number is out of Range")
  }
  data.splice(index,1)
  
  localStorage.setItem("input",JSON.stringify (data))
  alert("Your Task has been added")
}