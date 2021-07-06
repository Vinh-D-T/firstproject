

const taskManager = new RecipeManager(0);
taskManager.load();
taskManager.render();

let recipeName = document.querySelector("#recipeName");
let ingredient = document.querySelector("#ingredient");
let mealType = document.querySelector("#mealType");
let description = document.querySelector("#description");
let errMsg1= document.querySelector("#errMsg1");
let errMsg2 = document.querySelector("#errMsg2");
let errMsg3 = document.querySelector("#errMsg3");
let errMsg4 = document.querySelector("#errMsg4");
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
    if(mealType.value.trim() == "" || mealType.value.length < 2){
        errMsg3.innerHTML = "Please select meal time";
        document.querySelector("#errMsg3").style.color = "#ff0000"
        mealType.style.borderColor = "red";
        mealType.focus();
        allPassed = false;
            }else {
                errMsg3.innerHTML = "Looks Good";
                errMsg3.style.color = "green";
                mealType.style.borderColor = "green";
                // allPassed = true;
            }
    if(description.value.trim() == "" || description.value.length < 5){
       errMsg4.innerHTML = "The Task Title must be greater than 5 characters"
        document.querySelector("#errMsg4").style.color = "#ff0000"
        description.style.borderColor = "red";
        description.focus();
        allPassed = false;
            }else {
                errMsg4.innerHTML = "Looks Good";
                errMsg4.style.color = "green";
                description.style.borderColor = "green";
                // allPassed = true;
            }                            
            
    const clearFormInput = () => {
        recipeName.value="";
        recipeName.style.borderColor = "grey"
        ingredient.value="";
        ingredient.style.borderColor = "grey"
        mealType.value="";
        mealType.style.borderColor = "grey"
        description.value="";
        description.style.borderColor = "grey"
        errMsg1.innerHTML = "";
        errMsg2.innerHTML = "";
        errMsg3.innerHTML = "";
        errMsg4.innerHTML = "";
    }
    if (allPassed) {
          
        taskManager.addTask(recipeName.value, ingredient.value, mealType.value, description.value);
        taskManager.save();
        taskManager.render();
        clearFormInput();
    }
    
e.preventDefault();
}

let recipeNameEdit = document.querySelector("#recipeNameEdit");
let ingredientEdit = document.querySelector("#ingredientEdit");
let mealTypeEdit = document.querySelector("#mealTypeEdit");
let descriptionEdit = document.querySelector("#descriptionEdit");
let errMsg1Edit = document.querySelector("#errMsg1Edit");
let errMsg2Edit = document.querySelector("#errMsg2Edit");
let errMsg3Edit = document.querySelector("#errMsg3Edit");
let errMsg4Edit = document.querySelector("#errMsg4Edit");
let submitEdit = document.querySelector("#submitEdit");
let newrecipeNameEdit;
let newingredientEdit;
let newmealTypeEdit;
let newdescriptionEdit;

// task-list01, task-list02, task-list03 is display at bottom of Webpage
submitEdit.addEventListener("click", edit);
// function edit(){
//     if(newObjectId) {
//         const taskId = Number(newObjectId);
//         const taskB = taskManager.getTaskById(taskId);
//         taskB.recipeName = recipeNameEdit.value;
//         taskB.ingredient = ingredientEdit.value;
//         taskB.mealType = mealTypeEdit.value;
//         taskB.description = descriptionEdit;  
//     } else {
//         console.log("you made a mistake");
//     }
// }

function edit() {
    taskA.recipeName = recipeNameEdit.value;
    taskA.ingredient = ingredientEdit.value;
    taskA.mealType = mealTypeEdit.value;
    taskA.description = descriptionEdit.value;
    taskManager.save();
    taskManager.render();
    
}
    
const taskList01 = document.querySelector("#task-list01");
taskList01.addEventListener("click", (event) => {
    if (event.target.classList.contains("editBtn")){
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
        taskA = taskManager.getTaskById(taskId);
        recipeNameEdit.value = taskA.recipeName;
        ingredientEdit.value = taskA.ingredient;
        mealTypeEdit.value = taskA.mealType;
        descriptionEdit.value = taskA.description;
        newObjectId = taskA.objectId;
        console.log(newObjectId);
       // console.log(taskA)
        
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
            taskA = taskManager.getTaskById(taskId);
            recipeNameEdit.value = taskA.recipeName;
            ingredientEdit.value = taskA.ingredient;
            mealTypeEdit.value = taskA.mealType;
            descriptionEdit.value = taskA.description;
            newObjectId = taskA.objectId;  
            console.log(newObjectId); 
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
                taskA = taskManager.getTaskById(taskId);
                recipeNameEdit.value = taskA.recipeName;
                ingredientEdit.value = taskA.ingredient;
                mealTypeEdit.value = taskA.mealType;
                descriptionEdit.value = taskA.description;
                newObjectId = taskA.objectId;
                // taskA.Status = "Done";       
                // taskManager.save();
                // taskManager.render();
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
// task-list1, task-list2, task-list3 is display at for 3 diference modal            
const taskList1 = document.querySelector("#task-list1");
taskList1.addEventListener("click",(event) => {
    if (event.target.classList.contains("editBtn")){
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
        taskA = taskManager.getTaskById(taskId);
        recipeNameEdit.value = taskA.recipeName;
        ingredientEdit.value = taskA.ingredient;
        mealTypeEdit.value = taskA.mealType;
        descriptionEdit.value = taskA.description;
        newObjectId = taskA.objectId;
        
    
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
            taskA = taskManager.getTaskById(taskId);
            recipeNameEdit.value = taskA.recipeName;
            ingredientEdit.value = taskA.ingredient;
            mealTypeEdit.value = taskA.mealType;
            descriptionEdit.value = taskA.description;
            newObjectId = taskA.objectId;
          
            // taskA.Status = "Done";       
            // taskManager.save();
            // taskManager.render();
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
                taskA = taskManager.getTaskById(taskId);
                recipeNameEdit.value = taskA.recipeName;
                ingredientEdit.value = taskA.ingredient;
                mealTypeEdit.value = taskA.mealType;
                descriptionEdit.value = taskA.description;
                newObjectId = taskA.objectId;
                // taskA.Status = "Done";       
                // taskManager.save();
                // taskManager.render();
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

            // editBtn.addEventListener("click", validFormInputEdit1);

// function validFormInputEdit1 (e) {
//     var allPassedEdit = true;
        
//     if(recipeNameEdit.value.trim() == "" || recipeNameEdit.value.length < 5){
//         errMsg1Edit.innerHTML = "Must be greater than 5 characters";
//         document.querySelector("#errMsg1Edit").style.color = "#ff0000";
//         recipeNameEdit.style.borderColor = "red";
//         recipeNameEdit.focus(); 
//         allPassedEdit = false;
//             }else {
//                 errMsg1Edit.innerHTML = "Looks Good";
//                 errMsg1Edit.style.color = "green";
//                 recipeNameEdit.style.borderColor = "green";
//                 // allPassed = true;
//             }
//     if(ingredientEdit.value.trim() == "" || ingredientEdit.value.length < 5){
//         errMsg2Edit.innerHTML = "Must be greater than 5 characters"
//         document.querySelector("#errMsg2Edit").style.color = "#ff0000"
//         ingredientEdit.style.borderColor = "red";
//         ingredientEdit.focus();
//         allPassedEdit = false;
//             }else {
//                 errMsg2Edit.innerHTML = "Looks Good";
//                 errMsg2Edit.style.color = "green";
//                 ingredientEdit.style.borderColor = "green";
//                 // allPassed = true;
//             }
//     if(mealTypeEdit.value.trim() == "" || mealTypeEdit.value.length < 2){
//         errMsg3Edit.innerHTML = "Please select meal time";
//         document.querySelector("#errMsg3Edit").style.color = "#ff0000"
//         mealTypeEdit.style.borderColor = "red";
//         mealTypeEdit.focus();
//         allPassedEdit = false;
//             }else {
//                 errMsg3Edit.innerHTML = "Looks Good";
//                 errMsg3Edit.style.color = "green";
//                 mealTypeEdit.style.borderColor = "green";
//                 // allPassed = true;
//             }
//     if(descriptionEdit.value.trim() == "" || descriptionEdit.value.length < 5){
//        errMsg4Edit.innerHTML = "The Task Title must be greater than 5 characters"
//         document.querySelector("#errMsg4Edit").style.color = "#ff0000"
//         descriptionEdit.style.borderColor = "red";
//         descriptionEdit.focus();
//         allPassedEdit = false;
//             }else {
//                 errMsg4Edit.innerHTML = "Looks Good";
//                 errMsg4Edit.style.color = "green";
//                 descriptionEdit.style.borderColor = "green";
//                 // allPassed = true;
//             }                            
            
//     const clearFormInput1 = () => {
//         recipeNameEdit.value="";
//         recipeNameEdit.style.borderColor = "grey"
//         ingredientEdit.value="";
//         ingredientEdit.style.borderColor = "grey"
//         mealTypeEdit.value="";
//         mealTypeEdit.style.borderColor = "grey"
//         descriptionEdit.value="";
//         descriptionEdit.style.borderColor = "grey"
//         errMsg1Edit.innerHTML = "";
//         errMsg2Edit.innerHTML = "";
//         errMsg3Edit.innerHTML = "";
//         errMsg4Edit.innerHTML = "";
//     }
//     if (allPassedEdit) {
//         taskA.recipeName = recipeNameEdit.value;
//         taskA.ingredient = ingredientEdit.value;
//         taskA.mealType = mealTypeEdit.value;
//         taskA.description = descriptionEdit.value;
//         // taskManager.addTask(newrecipeNameEdit, newingredientEdit, newmealTypeEdit, newdescriptionEdit);      
//         // taskManager.save();
//         // taskManager.render();
//         clearFormInput1();
//     }
    
// e.preventDefault();
// }
// End validate edit form here
