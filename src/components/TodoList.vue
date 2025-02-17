<template>
  <div class="mb-6 px-4 overflow-y-auto h-full overflow-hidden custom-scrollbar">
    <h2 class="text-xl font-semibold mb-3">進行中</h2>
    <TransitionGroup name="fadeAndScale" tag="ul" class="space-y-2 relative">
      <!-- Example To-Do Item -->
      <li v-for="todo in todos" :key="todo.id"
        class="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <span>{{ todo.text }}</span>
        <button @click="completed(todo.id, todo.text)"
          class="text-green-600 hover:text-green-300 dark:text-green-100 dark:hover:text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"
            class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </button>
      </li>
    </TransitionGroup>
  </div>
</template>

<script>
export default {
  props: ["todos"],
  methods: {
    completed(todoId, todoText) {
      this.$emit('complete', todoId, todoText);
    }
  }
}
</script>

<style scoped>
.fadeAndScale-enter-active {
  transition: all 0.5s ease;
}

.fadeAndScale-leave-active {
  transition: all 0.5s ease;
  position: absolute;
  width: 100%;
  max-width: 100%;
}

.fadeAndScale-move {
  transition: all 0.5s ease;
}

.fadeAndScale-enter-from {
  opacity: 0;
  transform: translateX(-30px) scale(0.8);
}

.fadeAndScale-leave-to {
  opacity: 0;
  transform: translateX(30px) scale(1.1);
}

.custom-scrollbar::-webkit-scrollbar {
  width: 12px;
  /* 寬度 */
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent
  /* 滾動條背景 */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: gray;
  /* 滾動條滑塊 */
  border-radius: 6px;
  /* 圓角 */
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgb(75, 75, 75);
  /* 滑塊懸停顏色 */
}
</style>
