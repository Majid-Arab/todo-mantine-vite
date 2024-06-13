import { Card } from "@mantine/core";
import { useState } from "react";
import Balance from "./Balance";
import Income from "./Income";
import History from "./History";
import { ExpenseForm } from "./ExpenseForm";
import { useTracker } from "../../store";

type ExpenseTracks = {
  id: number;
  title: string;
  amount: number;
};

function Expense() {
  const [tracks, setTracks] = useState<ExpenseTracks[]>([]);
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState(0);

  // function deposit() {
  //   const newExpense: ExpenseTracks = {
  //     id: Math.random(),
  //     title: reason,
  //     amount: +amount.toFixed(2),
  //   };
  //   setTracks([...tracks, newExpense]);
  //   setReason("");
  //   setAmount(0);
  // }

  const { income, expense, balance } = tracks.reduce(
    (accumulator, currentValue) => {
      if (currentValue.amount > 0) {
        accumulator.income += currentValue.amount;
      } else {
        accumulator.expense += currentValue.amount;
      }
      accumulator.balance = accumulator.income - Math.abs(accumulator.expense);
      return accumulator;
    },
    { income: 0, expense: 0, balance: 0 }
  );

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder w={500} m={"auto"}>
      <Balance balance={balance} />

      <Income income={income} expense={expense} />

      <History tracks={tracks} />

      <ExpenseForm
        reason={reason}
        amount={amount}
        // onAdd={}
        onAmountChange={(e) => setAmount(+e)}
        onChange={(e) => setReason(e.target.value)}
      />
    </Card>
  );
}

export default Expense;
