<template>
   <div id="app" class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
    <header class="p-4 relative">
      <ThemeButton />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import ThemeButton from './components/ThemeButton.vue';
export default {
  data() {
      return {

      }
  },
  components: {
    ThemeButton
  }
}
</script>

<style>
html {
    transition: background-color 0.3s, color 0.3s;
}
</style>
