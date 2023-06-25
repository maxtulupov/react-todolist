
<script setup lang="ts">
  import { Todo } from '../../../types/todo.interface.ts';
  import TodoListItem from './TodoListItem.vue';

  const props = defineProps({
    todos: Array<Todo>
  })

</script>
<template>
  <ul>
    <TodoListItem v-for="todo in props.todos" :key="todo.id" :text="todo.text" :done="todo.done" :id="todo.id" />
  </ul>
</template>
