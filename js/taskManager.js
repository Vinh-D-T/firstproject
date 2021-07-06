// Declare function createTaskHTML
const createTaskHTML = (Id, recipeName, ingredient, mealTime) =>{
    const html = `
                <li class="card aaaaa" data-task-id="${Id}">
                    <div class="card-body ">
                        <h6 class="card-title"><b>${recipeName}</b></h6>
                        <p class="card-text">${ingredient}</p>
                        <p class="card-text">Recipe For: ${mealTime}</p>
                        <div class="card-footer row b d-flex justify-content-end">
                                <div class="col-6 d-flex justify-content-end">
                                    <button class="btn btn-outline-success editBtn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalAA"  id="editButton">
                                        Edit
                                    </button>    
                                </div>
                                <div class="col-6 d-flex justify-content-end">
                                    <button class="btn btn-outline-danger deleteBtn">
                                        Delete
                                    </button>
                                </div>
                        </div>
                    </div>
                </li>`;
              return html;
};

// Declar TaskManager class
class RecipeManager{
    constructor(currentId = 0){
        this.tasks = [];
        this.currentId = currentId;
    }
    // addTask method of TaskManager class
    addTask(recipeName, ingredient, mealType, description) {
        const recipeObject = {
            objectId: this.currentId++,
            recipeName: recipeName,
            ingredient: ingredient,
            mealTime: mealType,
            description: description,
        };
        this.tasks.push(recipeObject);
        console.log(this.tasks)
        return this.tasks;
     }; 
    // End TaskManager lass
    render (){
        const recipeNameArray = [];
        const ingredientArray = [];
        const mealTimeArray = [];
        for (let i=0; i<this.tasks.length; i++){
            const task = this.tasks[i];
            const taskHtml = createTaskHTML (task.objectId, task.recipeName, task.ingredient, task.mealType, task.description);
                            
                  if(task.mealTime === "Entree"){
                    //button.id.style.display="none";
                    recipeNameArray.push(taskHtml);             
                    } else if(task.mealTime === "Main-Course") {
                        ingredientArray.push(taskHtml);
                        } else if(task.mealTime === "Dessert") {
                            mealTimeArray.push(taskHtml);
                        }
                        // else {
                        //     console.error('You made a mistake');
                        // }                          
            const recipeNameHtml = recipeNameArray.join("\n");
            const recipeNameList = document.querySelector("#task-list1");
            const recipeNameList01 = document.querySelector("#task-list01");
            recipeNameList.innerHTML = recipeNameHtml;
            recipeNameList01.innerHTML = recipeNameHtml;
            // add the TodoHtml to ingredientHtml
            const ingredientHtml = ingredientArray.join("\n");
            const ingredientList = document.querySelector("#task-list2");
            const ingedientList02 = document.querySelector("#task-list02");
            ingredientList.innerHTML = ingredientHtml;
            ingedientList02.innerHTML = ingredientHtml;
            //add the mealTimeHtml to mealTimeHTML
            const mealTimeHtml = mealTimeArray.join("\n");
            const mealTimeList = document.querySelector("#task-list3");
            const mealTimeList03 = document.querySelector("#task-list03");
            mealTimeList.innerHTML = mealTimeHtml;
            mealTimeList03.innerHTML = mealTimeHtml;
            
    };    
             
};
    getTaskById(taskId){
        let foundTask;
        for(let i=0; i<this.tasks.length; i++) {
            const task = this.tasks[i];
            if (task.objectId === taskId){
                foundTask = task;
            }
        }
        return foundTask;   
    };
    
    save() {
        // Create a JSON string of the tasks
        const tasksJson = JSON.stringify(this.tasks);
        // Store the JSON string in localStorage
        localStorage.setItem("task", tasksJson);
        // Convert the currentId to a string;
        const currentId = String(this.currentId);
        // Store the currentId in localStorage
        localStorage.setItem("currentId", currentId);
      }
    
      load() {
        // Check if any tasks are saved in localStorage
        if (localStorage.getItem("task")) {
        // Get the JSON string of tasks in localStorage
          const tasksJson = localStorage.getItem("task");
        // Convert it to an array and store it in our TaskManager
          this.tasks = JSON.parse(tasksJson);
        }
    
        // Check if the currentId is saved in localStorage
        if (localStorage.getItem("currentId")) {
          // Get the currentId string in localStorage
          const currentId = localStorage.getItem("currentId");
    
          // Convert the currentId to a number and store it in our TaskManager
          this.currentId = Number(currentId);
        }
      }
      deleteTask(taskId) {
        // Create an empty array and store it in a new variable, newTasks
        const newTasks = [];
        // Loop over the tasks
        for (let i = 0; i < this.tasks.length; i++) {
          // Get the current task in the loop
          const task = this.tasks[i];
          // Check if the task id is not the task id passed in as a parameter
          if (task.objectId !== taskId) {
            // Push the task to the newTasks array
            newTasks.push(task);
            
          }
        }
        // Set newTasks to this.tasks
        this.tasks = newTasks;
        if(this.tasks.length == 0){
          location.reload();
          this.currentId = 0;
        }
    }
};
