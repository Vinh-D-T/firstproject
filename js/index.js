

const taskManager = new RecipeManager(0);
taskManager.load();
taskManager.render();

let recipeName = document.querySelector("#recipeName");
let ingredient = document.querySelector("#ingredient");
let mealTime = document.querySelector("#mealTime");
let errMsg1= document.querySelector("#errMsg1");
let errMsg2 = document.querySelector("#errMsg2");
let errMsg3 = document.querySelector("#errMsg3");
let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", validFormInput );

function validFormInput (e) {
    var allPassed = true;
        
    if(recipeName.value.trim() == "" || recipeName.value.length < 5){
        errMsg1.innerHTML = "Must be greater than 5 characters";
        document.querySelector("#errMsg1").style.color = "#ff0000";
        recipeName.style.borderColor = "red";
        recipeName.focus(); 
        allPassed = false;
            }else {
                errMsg1.innerHTML = "Looks Good";
                errMsg1.style.color = "green";
                recipeName.style.borderColor = "green";
                // allPassed = true;
            }
    if(ingredient.value.trim() == "" || ingredient.value.length < 5){
        errMsg2.innerHTML = "Must be greater than 5 characters"
        document.querySelector("#errMsg2").style.color = "#ff0000"
        ingredient.style.borderColor = "red";
        ingredient.focus();
        allPassed = false;
            }else {
                errMsg2.innerHTML = "Looks Good";
                errMsg2.style.color = "green";
                ingredient.style.borderColor = "green";
                // allPassed = true;
            }
    if(mealTime.value.trim() == "" || mealTime.value.length < 2){
        errMsg3.innerHTML = "Please select meal time";
        document.querySelector("#errMsg3").style.color = "#ff0000"
        mealTime.style.borderColor = "red";
        mealTime.focus();
        allPassed = false;
            }else {
                errMsg3.innerHTML = "Looks Good";
                errMsg3.style.color = "green";
                mealTime.style.borderColor = "green";
                // allPassed = true;
            }
            
    const clearFormInput = () => {
        taskTitle.value="";
        taskTitle.style.borderColor = "grey"
        taskDescription.value="";
        taskDescription.style.borderColor = "grey"
        taskAssignment.value="";
        taskAssignment.style.borderColor = "grey"
        dueDate.value="";
        dueDate.style.borderColor = "grey"
        taskStatus.value="";
        taskStatus.style.borderColor = "grey"
        errMsg1.innerHTML = "";
        errMsg2.innerHTML = "";
        errMsg3.innerHTML = "";
        errMsg4.innerHTML = "";
        errMsg5.innerHTML = "";
    }
    if (allPassed) {
          
        taskManager.addTask(recipeName.value, ingredient.value, mealTime.value);
        taskManager.save();
        taskManager.render();
        clearFormInput();
    }
    
e.preventDefault();
}

// Get the Id of individual task
const taskList01 = document.querySelector("#task-list01");
taskList01.addEventListener("click", (event) => {
    if (event.target.classList.contains("editBtn")){
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
     
        // const taskA = taskManager.getTaskById(taskId);
        // taskA.Status = "Done";       
        taskManager.save();
        taskManager.render();
        //console.log(Number(event.target.id));
        //console.log(Number(taskId)); 
     }
    
     if (event.target.classList.contains("deleteBtn")) {
        // Get the parent Task
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
            // Get the taskId of the parent Task.
        const taskId = Number(parentTask.dataset.taskId);
           // Delete the task
            taskManager.deleteTask(taskId);
            // location.reload()
            // Save the tasks to localStorage
            taskManager.save();
            // Render the tasks
            taskManager.render();
      }
    });
    const taskList02 = document.querySelector("#task-list02");
    taskList02.addEventListener("click", (event) => {
        if (event.target.classList.contains("editBtn")){
            const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
            const taskId = Number(parentTask.dataset.taskId);
           
            // const taskA = taskManager.getTaskById(taskId);
            // taskA.Status = "Done";       
            taskManager.save();
            taskManager.render();
            //console.log(Number(event.target.id));
            //console.log(Number(taskId)); 
         }
        
         if (event.target.classList.contains("deleteBtn")) {
            // Get the parent Task
            const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
                // Get the taskId of the parent Task.
            const taskId = Number(parentTask.dataset.taskId);
               // Delete the task
                taskManager.deleteTask(taskId);
                // location.reload()
                // Save the tasks to localStorage
                taskManager.save();
                // Render the tasks
                taskManager.render();
          }
        });
        const taskList03 = document.querySelector("#task-list03");
        taskList03.addEventListener("click",(event) => {
            if (event.target.classList.contains("editBtn")){
                const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
                const taskId = Number(parentTask.dataset.taskId);
               
                // const taskA = taskManager.getTaskById(taskId);
                // taskA.Status = "Done";       
                taskManager.save();
                taskManager.render();
                //console.log(Number(event.target.id));
                //console.log(Number(taskId)); 
             }
            
             if (event.target.classList.contains("deleteBtn")) {
                // Get the parent Task
                const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
                    // Get the taskId of the parent Task.
                const taskId = Number(parentTask.dataset.taskId);
                   // Delete the task
                    taskManager.deleteTask(taskId);
                    // location.reload()
                    // Save the tasks to localStorage
                    taskManager.save();
                    // Render the tasks
                    taskManager.render();
              }
            });
            
const taskList1 = document.querySelector("#task-list1");
taskList1.addEventListener("click",(event) => {
    if (event.target.classList.contains("editBtn")){
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
        
        // const taskA = taskManager.getTaskById(taskId);
        // taskA.Status = "Done";       
        taskManager.save();
        taskManager.render();
        //console.log(Number(event.target.id));
        //console.log(Number(taskId)); 
     }
    
     if (event.target.classList.contains("deleteBtn")) {
        // Get the parent Task
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
            // Get the taskId of the parent Task.
        const taskId = Number(parentTask.dataset.taskId);
           // Delete the task
           taskManager.deleteTask(taskId);   
            // location.reload()
            // Save the tasks to localStorage
            taskManager.save();
            // Render the tasks
            taskManager.render();
      }
    });
    const taskList2 = document.querySelector("#task-list2");
    taskList2.addEventListener("click",(event) => {
        if (event.target.classList.contains("editBtn")){
            const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
            const taskId = Number(parentTask.dataset.taskId);
            
            // const taskA = taskManager.getTaskById(taskId);
            // taskA.Status = "Done";       
            taskManager.save();
            taskManager.render();
         }
        
         if (event.target.classList.contains("deleteBtn")) {
            // Get the parent Task
            const parentTask =
              event.target.parentElement.parentElement.parentElement.parentElement;
                // Get the taskId of the parent Task.
            const taskId = Number(parentTask.dataset.taskId);
               // Delete the task
                taskManager.deleteTask(taskId);
                // location.reload()
                // Save the tasks to localStorage
                taskManager.save();
                // Render the tasks
                taskManager.render();
          }
        });
        const taskList3 = document.querySelector("#task-list3");
        taskList3.addEventListener("click",(event) => {
            if (event.target.classList.contains("editBtn")){
                const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
                const taskId = Number(parentTask.dataset.taskId);
                
                // const taskA = taskManager.getTaskById(taskId);
                // taskA.Status = "Done";       
                taskManager.save();
                taskManager.render();
            }
             if (event.target.classList.contains("deleteBtn")) {
                // Get the parent Task
                const parentTask =
                  event.target.parentElement.parentElement.parentElement.parentElement;
                    // Get the taskId of the parent Task.
                const taskId = Number(parentTask.dataset.taskId);
                   // Delete the task
                    taskManager.deleteTask(taskId);
                    // location.reload()
                    // Save the tasks to localStorage
                    taskManager.save();
                    // Render the tasks
                    taskManager.render();
              }
            });
