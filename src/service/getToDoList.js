export function saveToDoList() {
    localStorage.setItem('ToDoList', JSON.stringify(getToDoList() || {}))
}

export function getToDoList() {
    return JSON.parse(localStorage.getItem('ToDoList'));
}
