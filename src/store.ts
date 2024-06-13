import { create } from "zustand";

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  created_at: Date;
};

type TodoStore = {
  todos: Todo[];
  createTodo: (todo: string) => void;
  completeTodo: (checked: boolean, todo: Todo) => void;
  deleteTodo: (id: number) => void;
  editTodo: (todo: Todo) => void;
};

const initialData: Todo[] = [
  {
    id: 1,
    todo: "Robert Wolfkisser",
    completed: false,
    created_at: new Date(),
  },
  {
    id: 2,
    todo: "Jill Jailbreaker",
    completed: false,
    created_at: new Date(),
  },
  {
    id: 3,
    todo: "Henry Silkeater",
    completed: false,
    created_at: new Date(),
  },
];

export const useTodos = create<TodoStore>((set, get) => ({
  todos: initialData,
  createTodo: (todo) => {
    const newTodo: Todo = {
      id: Math.random(),
      todo,
      completed: false,
      created_at: new Date(),
    };
    set({ todos: [...get().todos, newTodo] });
  },
  completeTodo: (checked, todo) => {
    const newTodos = get().todos.map((todoF) =>
      todoF.id === todo.id ? { ...todoF, completed: checked } : todoF
    );
    set({ todos: newTodos });
  },
  deleteTodo: (id) => {
    const newTodos = get().todos.filter((item) => item.id !== id);
    set({ todos: newTodos });
  },
  editTodo: (todo) => {
    const newTodos = get().todos.map((todoE) => {
      if (todo?.id === todoE.id) {
        todoE.todo = todo.todo;
      }
      return todoE;
    });
    set({ todos: newTodos });
  },
}));
