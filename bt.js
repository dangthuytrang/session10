let todoList = [
    { 
        title: "Go to market", 
        isActive: true,
    },
    { 
        title: "Buy food",
        isActive: false, 
    },
    { 
        title: "Make dinner",
        isActive: true, 
    },
];

let form = document.getElementById("form");
let form__submit = document.getElementById("form__submit");
let btn = document.querySelectorAll('.footer__btn');

let render = function(arr) {
    let createUl = document.createElement("ul");
    createUl.id = "todolist";
    let listLength = document.querySelector(".footer__length");
    let listLengthTodo = arr.length;
    listLength.innerHTML = `${listLengthTodo} items`;

    for (let i = 0; i < listLengthTodo; i++) {
        let createLi = document.createElement("li"); 
        let createBtn = document.createElement("button");
        createLi.innerText = arr[i].title;
        if (arr[i].isActive === false) {
            createLi.classList.add("done");
        }
        createBtn.innerText = "Clear";

        createBtn.onclick = function() {
            arr[i].isActive = !arr[i].isActive;

            if (arr[i].isActive === false) {
                createLi.classList.add("done");
            } else {
                createLi.classList.remove("done");
            }
        }
        createLi.appendChild(createBtn);
        createUl.appendChild(createLi);
    }
    form__submit.appendChild(createUl);
};

form.onsubmit = function(event) {
    event.preventDefault();
    let removeUl = document.getElementById("todolist");
    removeUl.remove();

    let inputValue = form.todo.value;
    let newTodo = {
        title: inputValue,
        isActive: true,
    };
    todoList.push(newTodo);
    render(todoList);
};

btn[0].onclick = function() {
    let removeUl = document.getElementById("todolist");
    removeUl.remove();
    render(todoList)
};
btn[1].onclick = function() {
    let removeUl = document.getElementById("todolist");
    removeUl.remove();
    let active = todoList.filter(function(myCallback){
        return myCallback.isActive === true;
    })
    render(active)
}
btn[2].onclick = function() {
    let removeUl = document.getElementById("todolist");
    removeUl.remove();
    let complete = todoList.filter(function(myCallback) {
        return myCallback.isActive === false;
    })
    render(complete);
}
btn[3].onclick = function() {
    for(let i = 0; i<todoList.length; i++) {
        if (todoList[i].isActive === false) {
            todoList.splice(i,1);
        }
    };
}
render(todoList)
