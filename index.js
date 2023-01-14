
alert("say yoooo...");
var taskName = document.getElementById("taskName")
var addBtn = document.getElementById("addButton");
var output_container = document.getElementsByClassName("output_container");
var taskList = [];


addBtn.addEventListener("click",()=>{
    let subContainer = createTaskObject(taskName.value);
    output_container[0].appendChild(subContainer);
})


document.body.addEventListener( 'click', function ( event ) {
    console.log(event.target.type)
    if(event.target.type == 'checkbox')
    {
        console.log(event.target.id)     
        updateTaskStatus(event.target.id)   
    }
});
function createTaskContainer(task)
{
    console.log(task)
    var subContainer = document.createElement("div");
    var para = document.createElement("span");
    var checkBox = document.createElement("input");

    subContainer.class = "individualTask";
    para.id = task.id+"para"
    checkBox.id = task.id+"checkbox"
    checkBox.type = "checkbox"
    para.innerText = task.title;

    subContainer.appendChild(para)
    subContainer.appendChild(checkBox)

    return subContainer;
}
function createTaskObject(task)
{
    let taskToAdd = {
        id:Date.now(),
        title:task,
        status:false
    };
    taskList = taskList.push(taskToAdd);
    var returnNode = createTaskContainer(taskToAdd);
    return returnNode;
}
function updateTaskStatus(id)
{
    let index = id.indexOf('checkbox')
    id = id.slice(0,index);
    console.log(id);

    for(i = 0 ; i < taskList.length; i++)
    {
        if(taskList[i].id == id)
        {
            let task  = taskList[i];
            task.status = task.status ? false : true;
            if(task.status)
            {
                task.title.innerHTML = "<s>task.status</s>"
            } 
            console.log(task);
            return task;
        }
    }
    
}