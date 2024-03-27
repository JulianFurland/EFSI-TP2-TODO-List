var taskArray = [];

function AgregarItem(){
    let tagInput = document.getElementById("input");
    if(tagInput.value != ""){
        let displayArray = [];
        let divDisplay = document.getElementById("divDisplay");
        divDisplay.innerHTML = null;
        var task = {text: "", crossed: false, createTime: Date.now(), crossedTime: null};
        task.text = tagInput.value;
        taskArray.push(task);
        displayArray = taskArray;
        console.log(displayArray);
        tagInput.value = "";

        displayArray.forEach(element => {
            let pTask = document.createElement("p");
            CheckCrossed(element,pTask);
            pTask.innerHTML = `${element.text} Fecha Creacion: ${element.createTime}`;
            if(element.crossed){
                pTask.innerHTML += (`, Fecha Finalizacion: ${element.crossedTime}`);
            }
            divDisplay.appendChild(pTask);
            pTask.onclick = function() {ChangeCrossed(element,pTask)}
        });
    }
}
function ChangeCrossed(element, tag){
    if(element.crossed){
        tag.style.textDecoration = "";
        tag.style.color = "black";
        element.crossed = false;
        element.crossedTime = null;
    }
    else{
        tag.style.textDecoration = "line-through";
        element.crossed = true;
        element.crossedTime = Date.now();
        tag.style.color = "gray";
    }
}
function CheckCrossed(element, tag){
    if(element.crossed){
        tag.style.textDecoration = "line-through";
        tag.style.color = "gray";
    }
    else{
        tag.style.textDecoration = "";
        tag.style.color = "black";
    }
}