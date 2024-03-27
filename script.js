function AgregarItem(){
    let tagInput = document.getElementById("input");
    let divDisplay = document.getElementById("divDisplay");
    if(tagInput.value != "")
    {
        let newTask = document.createElement("div");
        divDisplay.appendChild(newTask);
        let taskText = document.createElement("p");
        taskText.className = "taskText";
        taskText.innerHTML = tagInput.value;
        newTask.appendChild(taskText);
        newTask.onclick = function() {CheckValue(taskText, true)};
    }
    let taskArray = document.getElementsByClassName("taskText");
    for(let task of taskArray){
        if(CheckValue(task, false)){
            task.remove();
        }
    };
    tagInput.value = "";
}
function CheckValue(element, change){
    console.log(change);
    if(element.style.textDecoration == "line-through"){
        if(change){element.style.textDecoration = "";}
        return true;
    }
    else{
        if(!change){element.style.textDecoration = "line-through";}
        return false;
    }
    
}
