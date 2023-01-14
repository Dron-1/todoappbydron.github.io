var taskName = document.getElementById("taskName")
var addBtn = document.getElementById("addButton");
var output_container = document.getElementsByClassName("output_container");
var taskList = [];
var editFlag = false;

fetchDataFromServer();

/*-------Adding event listener to Add Task button-------*/
addBtn.addEventListener("click",()=>{
    if(!editFlag && taskName.value.trim().length > 0)
    {
        let subContainer = createTaskObject(taskName.value);
        output_container[0].appendChild(subContainer);
        taskName.value = ""
    }
    else{
        updateTaskName(taskName.value);
    }
})


/*-------Adding event listener on checkbox-------*/
document.body.addEventListener( 'click', function ( event ) {
    let targetEventType = event.target.type;
    let eventTargetClass =  event.target.getAttribute("class");
    console.log(targetEventType,eventTargetClass);

    if(targetEventType == 'checkbox' && editFlag == false)
    {
        console.log(taskList)
        //dekhte h
        let checkbox = event.target;
        checkbox.checked ? false : true
        updateTaskStatus(event.target.id)  
    }
    else if(eventTargetClass == "delete" && editFlag == false)
    {
        handleDelete(event.target.id);
    }
    else if(eventTargetClass == "edit" && editFlag == false)
    {
        handleEdit(event.target.id)
    }
    else if(editFlag)
    {
        alert("Please save the previous task first🙄")
    }
});




function updateTaskStatus1(target)
{
    target.checked ? target.previousSibling.innerHTML = "<s>"+ target.previousSibling.innerHTML+"</s>" : target.previousSibling.innerHTML = target.previousSibling.innerText;
}