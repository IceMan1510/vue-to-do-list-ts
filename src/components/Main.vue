<script setup lang="ts">
const props = defineProps({
    toDoList: Array
});


let taskName: string = '';
let selectedDate: string = '';
const handleKeyPress = (e: any) => {
    console.log(props.toDoList);
    console.log(taskName);
    console.log(selectedDate);
}

</script>

<template>
    <div class="input-area flex justify-center">
        <input type='text' class="to-do-text-box h-14 w-2/3" placeholder="Enter Text + Enter" v-model="task"
            @keypress.enter="handleKeyPress" bind:task /> <input type="date" v-model="selectedDate" class="h-14 w-28">
    </div>
</template>


<style scoped>
input[type="text"] {
    font-size: 25px;
}
</style>