import { create } from "zustand";

type ExpenseTracks = {
  id: number;
  title: string;
  amount: number;
};

type ExpenseStore = {
  tracks: ExpenseTracks[];
  deposit: (track: Omit<ExpenseTracks, "id">) => void;
};

export const useExpenseStore = create<ExpenseStore>((set, get) => ({
  tracks: [],
  deposit: (track) => {
    const newExpense: ExpenseTracks = {
      id: Math.random(),
      ...track,
    };
    set({ tracks: [...get().tracks, newExpense] });
  },
}));
