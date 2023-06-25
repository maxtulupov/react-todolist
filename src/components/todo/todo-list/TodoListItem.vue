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

</script>
<template>
  <li class="flex justify-between items-center bg-slate-100 px-4 py-2 rounded-md">
    <span class="left font-semibold">
      {{ props.text }}
    </span>
    <span class="right flex gap-3">
      <button class="done px-4 py-2 rounded-md bg-emerald-300 font-semibold transition-colors hover:bg-emerald-600" @click="toggleDoneItem">Готово</button>
      <button class="remove px-4 py-2 rounded-md bg-red-700 font-semibold text-white transition-opacity hover:opacity-60" @click="removeItem">Удалить</button>
    </span>
  </li>
</template>

<style scoped>
  li:not(:last-child) {
    margin: 0px 0px 15px 0px;
  }
</style>