import { create } from "zustand";

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  created_at: Date;
};

type TodoStore = {
  polls: Todo[];
  createTodo: (poll: Omit<Todo, "id" | "createdAt">) => void;
  vote: (pollId: number, answerIndex: number) => void;
};

export const useTodos = create<TodoStore>((set, get) => ({}));
