import { createSlice } from '@reduxjs/toolkit';
import { isAfter, parseISO } from 'date-fns';
import { FILTERS } from '../types/constants';

const initialState = {
  tasks: [],
  filter: FILTERS.ALL,
  searchQuery: '',
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        ...action.payload,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      };
      state.tasks.push(newTask);
    },
    editTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const selectFilteredTasks = (state) => {
  const { tasks, filter, searchQuery } = state.tasks;
  const now = new Date();

  let filteredTasks = tasks;

  if (searchQuery) {
    filteredTasks = filteredTasks.filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  switch (filter) {
    case FILTERS.COMPLETED:
      return filteredTasks.filter((task) => task.completed);
    case FILTERS.PENDING:
      return filteredTasks.filter((task) => !task.completed);
    case FILTERS.OVERDUE:
      return filteredTasks.filter(
        (task) => !task.completed && isAfter(now, parseISO(task.dueDate))
      );
    default:
      return filteredTasks;
  }
};

export const {
  addTask,
  editTask,
  deleteTask,
  toggleTaskCompletion,
  setFilter,
  setSearchQuery,
} = taskSlice.actions;

export default taskSlice.reducer;