let textArea = document.querySelector(".input-field textarea");
let Icon = document.querySelector(".input-field i");
let todoList = document.querySelector(".todoList");
let List = document.querySelectorAll("li");
let clearAll = document.querySelector(".clear-button");
let num = document.querySelector(".num");
// console.log(textArea)
// console.log(Icon)
// console.log(List.length)
// console.log(trashIcon)
let n=0;
clearAll.addEventListener("click",function(){
    todoList.innerHTML = "";
    num.textContent = "no";
    // console.log(todoList.innerHTML)
})
// create eventListener on Enter button only
textArea.addEventListener("keypress",function(e){
    inputVal = textArea.value 
    if(e.key === "Enter" && inputVal.length > 0){
        e.preventDefault();
        // to stop default behaviour
        let li = document.createElement("li")
        li.classList.add("list")
        // create li and given className list
        let input = document.createElement("input");
        input.setAttribute("type","checkbox");
        // create input and create attribute checkbox
        let span = document.createElement("span");
        span.textContent = textArea.value;
        span.classList.add("task")
        // create span and given it value of textarea 
        let trashIcon = document.createElement("i");
        trashIcon.classList.add("fa-regular");
        trashIcon.classList.add("fa-trash-can");
        // create trahIcon
        li.appendChild(input)
        li.appendChild(span);
        li.appendChild(trashIcon);
        todoList.appendChild(li)
        n++;
        num.textContent = n;
        // console.log(n);
        // console.log(todoList.innerHTML);
        textArea.value = ""
        span.addEventListener("click",function(e){
            if(!e.target.previousSibling.classList.contains("checked")){
                e.target.previousSibling.checked = "true";
                e.target.previousSibling.classList.add("checked");
            }else if(e.target.previousSibling.classList.contains("checked")){
                e.target.previousSibling.checked = false;
                e.target.previousSibling.classList.remove("checked");
            }
        })
        trashIcon.addEventListener("click",function(e){
            n--;
            if(n === 0){
                num.textContent = "no";
            }else{
                num.textContent = n;
            }
            e.target.parentNode.style.display="none";
            // console.log(n);
        })
    }
    })