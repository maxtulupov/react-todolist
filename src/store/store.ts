import { createStore } from 'vuex';
import { Todo } from '../types/todo.interface';
import { getCookie, setStoreCookie } from '../utils/store-cookie';

const cookieTodoList: Todo[] = getCookie('todolist');

const store = createStore({
	state: {
		todos: cookieTodoList ? cookieTodoList : ([] as Array<Todo>),
	},
	mutations: {
		addTodo: (state, payload: Todo) => {
			state.todos.push(payload);
			setStoreCookie(state.todos);
		},
		removeTodo: (state, payload: number) => {
			const index = state.todos.findIndex((todo) => todo.id === payload);
			if (index !== -1) {
				state.todos.splice(index, 1);
				setStoreCookie(state.todos);
			}
		},
		toggleDone: (state, payload: number) => {
			const todo = state.todos.find((todo) => todo.id === payload);
			if (todo) {
				todo.done = !todo.done;
				setStoreCookie(state.todos);
			}
		},
	},
	actions: {
		addTodo: ({ commit }, payload: Todo) => {
			commit('addTodo', payload);
		},
		removeTodo: ({ commit }, payload: number) => {
			commit('removeTodo', payload);
		},
		toggleDone: ({ commit }, payload: number) => {
			commit('toggleDone', payload);
		},
	},
	getters: {
		allTodos: (state) => {
			return state.todos;
		},
		doneTodos: (state) => {
			return state.todos.filter((todo) => todo.done);
		},
		undoneTodos: (state) => {
			return state.todos.filter((todo) => !todo.done);
		},
	},
});

export default store;
