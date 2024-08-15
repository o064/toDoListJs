
var inp = document.getElementById("taksName");
var Add_Btn = document.getElementById("Add");
var taskContainer = document.getElementById("taskContainer");
var containers = document.querySelectorAll(".container");
inp.focus();

Add_Btn.addEventListener('click', ()=>{
    var txt = inp.value.trim();
    if(txt === "" || !isNaN(txt) ){
        alert("Enter any string");
        inp.value = "";
        return;
    }

    createContainer(txt);
    inp.value = " ";
    inp.focus();


});


// create task
function createContainer(txt){
    var divcontainer = document.createElement("div");
    divcontainer.classList.add("container");
    var checkInput = document.createElement('input');
    checkInput.setAttribute('type', 'checkbox');
    checkInput.classList.add('check');
    var taskSpan = document.createElement("span");
    taskSpan.classList.add("task");
    var task = document.createTextNode(txt);
    taskSpan.appendChild(task);
    var iconSpan = document.createElement("span");
    taskSpan.classList.add("close-icon");
    var icon = document.createElement("i");
    icon.classList.add("fas", "fa-times");
    iconSpan.appendChild(icon);
    divcontainer.appendChild(checkInput);
    divcontainer.appendChild(taskSpan);
    divcontainer.appendChild(iconSpan);
    taskContainer.appendChild(divcontainer);
    checkInput.addEventListener('change', function() {
        if (this.checked) {
            taskSpan.classList.add("checkedTask");
            taskSpan.classList.remove("discheckedTask");

        }else{
            taskSpan.classList.remove("checkedTask");
            taskSpan.classList.add("discheckedTask");
        }
    });
    iconSpan.addEventListener('click', function() {
        divcontainer.remove();
    });
}