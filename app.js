//selector 

const inputForm = document.getElementById("input-form");
const inputData = document.getElementById("input-data");
const allTasks = document.querySelector(".task");


//form events
inputForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    
    if(!inputData.value){
        alert("Plese, intert a task!");
        return;
    }



    //creating task div
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("content");

    //Creating input field 
    const inputTask = document.createElement("input");
    inputTask.type = "text";
    inputTask.value = inputData.value;
    inputTask.setAttribute("readonly","readonly");

    //creating a action div 
    const actions = document.createElement("div");
    actions.classList.add("action");

    //creating Edit button
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.classList.add("btn");
    editBtn.innerText="Edit";
    actions.appendChild(editBtn);

      //creating Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete");
      deleteBtn.classList.add("btn");
      deleteBtn.innerText="Delete";
      actions.appendChild(deleteBtn);


      //adding the input field to content div 
      taskDiv.appendChild(inputTask);

      // adding actions div to all task div
      taskDiv.appendChild(actions);

      //adding the content div to all task div 
      allTasks.appendChild(taskDiv);

      //edit a task field
      editBtn.addEventListener("click", (e)=>{
        if(editBtn.innerText.toLocaleLowerCase() === "edit"){
            inputTask.removeAttribute("readonly");
            editBtn.innerText = "Save";
            
            inputTask.focus();

        }else{
            editBtn.innerText = "Edit";
        
            inputTask.setAttribute("readonly","readonly");
        }
      });
    

      deleteBtn.addEventListener("click", ()=>{
        allTasks.removeChild(taskDiv);
      });
    



    // input file clear 
      inputData.value="";

});



