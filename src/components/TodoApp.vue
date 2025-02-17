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
  methods: {
    handleAddTodo(newTodo) {
      const newId = ++this.currentId;
      this.todos.push({ id: newId, text: newTodo });
    },
    handlecomplete(todoId, todoText) {
      this.todos = this.todos.filter((t) => t.id !== todoId);
      this.completedTodos.unshift({ id: todoId, text: todoText });
    },
    handleDelete(completedId) {
      this.completedTodos = this.completedTodos.filter((c) => c.id !== completedId);
    },
    handleDeleteAll() {
      this.completedTodos = [];
    }
  },
}
</script>

<style scoped></style>