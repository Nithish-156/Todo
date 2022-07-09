//To assign variables to inputs and list

let input = document.querySelector('#input');
let time = document.querySelector('.datetime');
let addBtn = document.querySelector('#addbtn');
let clrBtn = document.querySelector('#clearbtn');
let todolist = document.querySelector('.list');

//to add the todolist

addBtn.addEventListener('click', function (){

//If the no value is given to task

    if(input.value.trim()== ""){
        alert("Task cannot be empty");
        input.value="";
//If the value is given

    }else{      

            let todoTask = document.createElement('li');     
            let text = document.createElement('span');

//To create a textNode for task to add from input

            let textNode = document.createTextNode(input.value.trim());
            let datetimeNode = document.createTextNode(time.value);
            text.appendChild(textNode);

//To create a space between the task and time            
            let span = document.createElement('span');
            span.classList.add('space');
            span.innerHTML = ' : ';

//To create a span to enter the datetime value
            
            let datetime = document.createElement('span');
            datetime.classList.add('datetime');
            datetime.innerHTML = time.value;

//To create a span and used to remove the task

            let close = document. createElement('span');
            close.classList.add('close');
            close.innerHTML = '&times;';
 
//To set the all created values in list tag

            todoTask.append(text);
            todoTask.append(span);
            todoTask.append(datetime);
            todoTask.append(close);
            todolist.append(todoTask);


            //
            todoTask.addEventListener('click',function(){
                todoTask.classList.toggle('done');
            })
            
            // 

            close.addEventListener('click', function(){
            todoTask.remove();
});     
            input.value="";
            time.value="";
}
});

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

