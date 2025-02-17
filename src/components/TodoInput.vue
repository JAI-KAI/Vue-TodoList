<template>
  <div class="flex items-center max-w-md mx-auto space-x-3">
    <input type="text" placeholder="新增待辦事項..." v-model="newTodo" @keyup.enter="addTodo"
      class="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
    <button @click="addTodo" class="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none">
      新增
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newTodo: "",
    }
  },
  methods: {
    addTodo() {
      if(this.newTodo != "") {
        this.$emit('addTodo', this.newTodo);
        this.newTodo = ""
      }
    }
  }
  
}
</script>