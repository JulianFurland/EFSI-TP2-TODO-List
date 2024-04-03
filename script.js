var taskArray = [];

function AgregarItem(){
    let tagInput = document.getElementById("input");
    if(tagInput.value != ""){
        let displayArray = [];
        let divDisplay = document.getElementById("divDisplay");
        divDisplay.innerHTML = null;
        var task = {text: "", crossed: false, createTime: GetDateNow(), crossedTime: null};
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
            pTime.innerHTML = `      Fecha Creacion: ${element.createTime}`;
            if(element.crossed){
                pTime.innerHTML += (`, Fecha Finalizacion: ${element.crossedTime}`);
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
        tag.style.color = "black";
        element.crossed = false;
        element.crossedTime = null;
    }
    else{
        tag.style.textDecoration = "line-through";
        element.crossed = true;
        element.crossedTime = GetDateNow();
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

function GetDateNow(){
    var dateNow = new Date();
    var yyyy = dateNow.getFullYear();
    var mm = dateNow.getMonth() + 1;
    var dd = dateNow.getDate();
    var hhhh = `${dateNow.getHours()}:${dateNow.getMinutes()}`;
    return `${dd}/${mm}/${yyyy} ${hhhh}`;
}
function TareaCorta(strFecha1, strFecha2){
    let dd1 = `${strFecha1[0]}${strFecha1[1]}`;
    let mm1 = `${strFecha1[2]}${strFecha1[3]}`;
    let yyyy1 = `${strFecha1[4]}${strFecha1[5]}${strFecha1[6]}${strFecha1[7]}`;
    let hhhh1 = `${strFecha1[8]}${strFecha1[9]}${strFecha1[10]}${strFecha1[11]}`;

    let dd2 = `${strFecha2[0]}${strFecha2[1]}`;
    let mm2 = `${strFecha2[2]}${strFecha2[3]}`;
    let yyyy2 = `${strFecha2[4]}${strFecha2[5]}${strFecha2[6]}${strFecha2[7]}`;
    let hhhh2 = `${strFecha2[8]}${strFecha2[9]}${strFecha2[10]}${strFecha2[11]}`;


}