<script setup lang="ts">
  import { Todo } from '../../../types/todo.interface.ts';
  import { useStore } from 'vuex'

  const props = defineProps<Todo>()

  const store = useStore();

  const removeItem = () => {
    store.commit('removeTodo', props.id)
  }

  const toggleDoneItem = () => {
    store.commit('toggleDone', props.id)
  }

  const checkTodos = () => {
    return store.getters.allTodos.find((item: Todo) => item.id === props.id).done ? true : false;
  }

</script>
<template>
  <li class="sm: flex-col md:flex-row flex justify-between items-center bg-slate-100 px-4 py-2 rounded-md" v-bind:class="{ done: checkTodos() }">
    <span class="left font-semibold mb-2 md: m-0">
      {{ props.text }}
    </span>
    <span class="right flex gap-3 w-full md:w-auto">
      <button class="done px-4 py-2 rounded-md bg-emerald-300 font-semibold transition-colors hover:bg-emerald-600 w-1/2 md:w-auto" @click="toggleDoneItem">Готово</button>
      <button class="remove px-4 py-2 rounded-md bg-red-700 font-semibold text-white transition-opacity hover:opacity-60 w-1/2 md:w-auto" @click="removeItem">Удалить</button>
    </span>
  </li>
</template>

<style scoped>
  li:not(:last-child) {
    margin: 0px 0px 15px 0px;
  }
  li.done {
    position: relative;
    opacity: 0.6;
  }
  li.done:before {
    content: '';
    width:95%;
    height: 2px;
    @apply bg-black;
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
</style>