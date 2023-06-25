<script setup lang="ts">
  import { ref } from 'vue';
  import TodoList from './todo-list/TodoList.vue'
  import { useStore } from 'vuex'

  function getRandomInt(): number {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  }

  const store = useStore();

  const inputValue = ref('');

  const handelSubmit = () => {
    if (inputValue.value === '') return
    store.commit('addTodo', {
      id: getRandomInt(),
      text: inputValue.value,
      done: false
    });

    inputValue.value = '';
  };
</script>

<template>
  <form action="" class="todo w-full" @submit.prevent="handelSubmit">
    <input type="text" placeholder="Введите задачу" class="rounded-md bg-transparent px-4 py-3 border-2 border-gray-200 focus:outline-none flex w-full mb-5 text-white font-semibold" v-model="inputValue">
    <button type="submit" class="w-full flex justify-center items-center h-12 bg-emerald-400 rounded-md text-gray-800 font-bold transition-opacity hover:opacity-80">Добавить задачу</button>
  </form>
  <div class="mt-14 w-full">
    <h2 class="text-3xl text-white font-bold mb-8">Список задач</h2>
    <TodoList :todos="store.getters.allTodos" />
  </div>
  <!-- <h2>Списко выполненных задач</h2> -->
</template>
