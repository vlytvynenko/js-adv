class ToDo {
    constructor(description)    {
        //Eachh to do need a description
        this.description = description;
        //status by default not completed
        this.completed = false;
    }

    markCompleted() {
        this.completed = true;

        console.log(`"${this.description}" marked as completed!`);
    }
}

class ToDoList {

    constructor() {
        //Array empty to store data
        this.todos = [];
    }

    addToDo(description) {
        //creating new TO DO object
        const newTodo = new ToDo(description);

        //add new to dos item to array
        this.todos.push(newTodo);

        //update webpage display
        this.renderTodoList();
    }

    listTodos() {
        //return array of to dos
        return this.todos;
    }

    markTodoCompleted(index) {
        if (index >= 0 && index < this.todos.length) {
            this.todos[index].markCompleted();
            this.renderTodoList();
        }
    }

    renderTodoList() {
        const todoListElement = document.getElementById ("todoList");
        //clear list 
        todoListElement.innerHHTML = "";

        this.todos.forEach((todo, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = todo.description;

            if (todo.completed) {
                //adding css to all completed items
                listItem.classList.add('completed');
            }

            //create complete button for all todos
            const completeButton = document.createElement("button");

            completeButton.textContent = "Complete";

            completeButton.onclick = () => this.markTodoCompleted(index);

            listItem.appendChild(completeButton);
            todoListElement.appendChild(listItem);
        })
    }

}

//Creating instans of ToDoList
const myTodoList = new ToDoList();

//ref to TML elements
const addButton = document.getElementById("addButton");
const todoInput = document.getElementById("todoInput");

addButton.addEventListener("click", () => {
    //get value
    const todoText = todoInput.value.trim();

    if (todoText) {
        //addin to obj
        myTodoList.addToDo(todoText);

        //clear input after adding to object
        todoInput.value = "";
    }
})

myTodoList.renderTodoList();