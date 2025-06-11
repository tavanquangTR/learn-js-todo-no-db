const inputEl = document.getElementById("add-text");
const incompleteUl = document.getElementById("incomplete-list");
const completedUl = document.getElementById("completed-list");

const onClickAdd = ()=>{
   const inputText = inputEl.value;
   inputEl.value = "";

createIncompleteTodo(inputText)
   
};

const createIncompleteTodo = (todo) =>{
    // create todo item row
   const liEl = document.createElement("li");
   const divEl = document.createElement("div");
   const pEl = document.createElement("p");

   const completeBtn = document.createElement("button");
   completeBtn.addEventListener("click",()=>{
        const completeItem = completeBtn.closest("li");
        completeBtn.nextElementSibling.remove()
        completeBtn.remove();
        const backBtn = document.createElement("button");
        backBtn.innerText = "戻す";
        backBtn.addEventListener("click",()=>{
                const todoText = backBtn.previousElementSibling.innerText;
                createIncompleteTodo(todoText);
                completedUl.removeChild(backBtn.closest("li"))
        });
        completeItem.appendChild(backBtn)
        completeItem.className="list-row"
        incompleteUl.removeChild(completeItem);
        completedUl.appendChild(completeItem);

   });
   completeBtn.className ="complete-btn";
   completeBtn.innerText="完了"

   const deleteBtn = document.createElement("button");
   deleteBtn.addEventListener("click",()=>{
        const deleteEl = deleteBtn.closest("li");
        incompleteUl.removeChild(deleteEl)
        console.log(deleteEl)
   });
   deleteBtn.className = "delete-btn";
   deleteBtn.innerText="削除"
   const btnBlock = document.createElement("div");
   btnBlock.appendChild(completeBtn);
   btnBlock.appendChild(deleteBtn);
    
    divEl.className = "list-row"
    pEl.className="todo-item";
    pEl.innerText=todo;

    divEl.appendChild(pEl);
    divEl.appendChild(btnBlock);

    liEl.appendChild(divEl);
    incompleteUl.appendChild(liEl);
}
document.getElementById("add-button").addEventListener("click",onClickAdd);




