const todoForm = document.getElementById("todoForm");
const todoListUl = document.getElementById("todoListUl");

todoForm.addEventListener("submit",function(event){
    event.preventDefault();

    const todoInputValue = document.getElementById("todoInput").value;

    const newLiEl = `
        <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <div class="flex-grow-1 me-4">
              <input type="text" class="form-control" value="${todoInputValue}" disabled />
            </div>
            <div>
              <i class="fa-solid fa-pen-to-square me-2 pointer" onclick="editTask(event)"></i>
              <i class="fa-solid fa-trash pointer" onclick="deleteTask(event)" ></i>
            </div>
        </li>
    `

    todoListUl.innerHTML += newLiEl;
    // console.log(todoInputValue);
    // console.log(newLiEl);
})

function deleteTask(event){
    // event.target.parentElement.parentElement.remove();

    event.target.closest("li").remove();
}


function editTask(event){
const inputEl = event.target.closest('li').querySelector('input');

inputEl.disabled = false;
}








// let num01 = 10;
// let num02 =20;

// num02 += num01 
// num02 = num01+num02

// console.log(num02);
