<script setup lang="ts">
import Header from "./components/Shared/Headers/Header.vue"
import Footer from "./components/Shared/Footers/Footer-To-Do.vue";
import Main from "./components/Main.vue";
const toDoList: Array<object> = [{ id: 1, task: "Kill the iron", deadline: "2024-03-14", completed: false }, { id: 1, task: "Kill the iron", deadline: "2024-03-14", completed: false }];
</script>

<template>
  <div class="flex flex-col h-screen justify-between">
    <Header />
    <Main class="mb-auto" :toDoList="toDoList" />
    <Footer class="pb-2" />
  </div>
</template>

<style scoped></style>
