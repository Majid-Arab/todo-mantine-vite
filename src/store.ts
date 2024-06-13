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

export const useTracker = create<ExpenseStore>((set, get) => ({
  tracks: [],
  deposit: (track) => {
    const newExpense: ExpenseTracks = {
      id: Math.random(),
      // title: reason,
      // amount: +amount.toFixed(2),
      ...track,
    };
    set({ tracks: [...get().tracks, newExpense] });
  },
}));
