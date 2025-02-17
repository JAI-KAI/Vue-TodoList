const todoList = [
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    { id: 3, text: 'Task 3' }
  ];
const completed = [
    { id: 4, text: 'Task 4' },
    { id: 5, text: 'Task 5' },
    { id: 6, text: 'Task 6' }
  ];

export function getTodoList() {
    return todoList
}

export function getCompleted() {
    return completed
}