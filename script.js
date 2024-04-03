var taskArray = [];

function AgregarItem(){
    let tagInput = document.getElementById("input");
    if(tagInput.value != ""){
        let displayArray = [];
        let divDisplay = document.getElementById("divDisplay");
        divDisplay.innerHTML = null;
        var task = {text: "", crossed: false, createTimeFormatted: GetDateNow(), createTime: Date.now(), crossedTimeFormatted: null, crossedTime: null};
        task.text = tagInput.value;
        taskArray.push(task);
        displayArray = taskArray;
        console.log(displayArray);
        tagInput.value = "";

        displayArray.forEach(element => {
            
            let pTask = document.createElement("p");
            let pTime = document.createElement("p");
            CheckCrossed(element,pTask);
            pTask.innerHTML = `${element.text}:`;
            pTime.innerHTML = `      Fecha Creacion: ${element.createTimeFormatted}`;
            if(element.crossed){
                pTime.innerHTML += (`, Fecha Finalizacion: ${element.crossedTimeFormatted}`);
            }
            pTime.style.fontFamily = "Saeada_L";
            pTime.style.fontSize = "small";
            pTask.style.fontFamily = "Saeada_B";
            pTask.style.fontSize = "larger";
            let divPanel = document.createElement("div");
            divPanel.style.display = "flex";
            divPanel.style.flexDirection = "row";
            divPanel.style.alignItems = "center";
            divPanel.appendChild(pTask);
            divPanel.appendChild(pTime);
            divDisplay.appendChild(divPanel);
            pTask.onclick = function() {ChangeCrossed(element,pTask)}
            pTime.onclick = function() {ChangeCrossed(element,pTask)}
        });
    }
}
function ChangeCrossed(element, tag){
    if(element.crossed){
        tag.style.textDecoration = "";
        tag.style.color = "#feb900";
        element.crossed = false;
        element.crossedTime = null;
        element.crossedTimeFormatted = null;
    }
    else{
        tag.style.textDecoration = "line-through";
        element.crossed = true;
        element.crossedTime = Date.now();
        element.crossedTimeFormatted = GetDateNow();
        tag.style.color = "black";
    }
}
function CheckCrossed(element, tag){
    if(element.crossed){
        tag.style.textDecoration = "line-through";
        tag.style.color = "black";
    }
    else{
        tag.style.textDecoration = "";
        tag.style.color = "#feb900";
    }
}

function GetDateNow(){
    var dateNow = new Date();
    var yyyy = dateNow.getFullYear();
    var mm = dateNow.getMonth() + 1;
    var dd = dateNow.getDate();
    var hhhh = `${dateNow.getHours()}:${dateNow.getMinutes()}`;
    return `${dd}/${mm}/${yyyy} ${hhhh}`;
}
function TareaCorta(){
    let menor = -1;
    let taskMenor = null;
    taskArray.forEach(element => {
        if ((menor == -1 || element.crossedTime - element.createTime < menor)&& element.crossedTime != null){
            menor = element.crossedTime - element.createTime;
            taskMenor = element;
        }
    });
    document.getElementById("tareaMasCorta").innerHTML = taskMenor.text; 
}