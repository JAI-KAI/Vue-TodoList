<template>
  <div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex items-center justify-center">
    <div class="w-full mx-auto space-y-12">
      <TodoInput @addTodo="handleAddTodo" />
      <div class="grid grid-cols-2 gap-6 max-w-3xl mx-auto h-96">
        <TodoList :todos="todos" @complete="handlecomplete" />
        <CompleteList :completedTodos="completedTodos" @deleteCompleted="handleDelete" @deleteAll="handleDeleteAll" />
      </div>
    </div>
  </div>
</template>

<script>
import CompleteList from './CompleteList.vue';
import TodoInput from './TodoInput.vue';
import TodoList from './TodoList.vue';
import { getTodoList, getCompleted } from '../data/data';

export default {
  data() {
    return {
      todos: getTodoList(),
      completedTodos: getCompleted(),
      currentId: 6,
    }
  },
  components: {
    CompleteList,
    TodoInput,
    TodoList
  },
  mounted() {
    if(localStorage.getItem("todos") !== null) {
      this.todos = JSON.parse(localStorage.getItem("todos"))
    } 
    if(localStorage.getItem("completedTodos") !== null) {
      this.completedTodos = JSON.parse(localStorage.getItem("completedTodos"))
    } 
  },
  methods: {
    handleAddTodo(newTodo) {
      const allIds = [...this.todos.map(t => t.id), ...this.completedTodos.map( c => c.id)];
      const newId = allIds.length > 0 ? Math.max(...allIds) + 1 : 1;
      this.todos.push({ id: newId, text: newTodo });
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    handlecomplete(todoId, todoText) {
      this.todos = this.todos.filter((t) => t.id !== todoId);
      this.completedTodos.unshift({ id: todoId, text: todoText });
      localStorage.setItem('todos', JSON.stringify(this.todos));
      localStorage.setItem('completedTodos', JSON.stringify(this.completedTodos));
    },
    handleDelete(completedId) {
      this.completedTodos = this.completedTodos.filter((c) => c.id !== completedId);
      localStorage.setItem('completedTodos', JSON.stringify(this.completedTodos));
    },
    handleDeleteAll() {
      this.completedTodos = [];
      localStorage.setItem('completedTodos', JSON.stringify(this.completedTodos));
    }
  },
}
</script>

<style scoped></style>