<template>
    <div class="px-4 overflow-y-auto h-full overflow-hidden custom-scrollbar">
        <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold mb-3">已完成</h2>
            <button @click="deleteAll" class="text-sm text-gray-600 hover:text-gray-300 dark:text-gray-200 dark:hover:text-gray-500">全部清除</button>
        </div>
        <TransitionGroup name="fadeAndScale" tag="ul" class="space-y-2 relative">
            <!-- Example Completed Item -->
            <li v-for="item in completedTodos" :key="item.id" class="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <span class="line-through text-gray-500">{{ item.text }}</span>
                <button @click="deleteCompleted(item.id)" class="text-red-600 hover:text-red-300 dark:text-red-100 dark:hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
            </li>
        </TransitionGroup>
    </div>
</template>

<script>
export default {
    props: ["completedTodos"],
    methods: {
        deleteCompleted(completedId) {
            this.$emit('deleteCompleted', completedId)
        },
        deleteAll() {
            this.$emit('deleteAll');
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