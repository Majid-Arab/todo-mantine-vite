import {
  Card,
  Text,
  Button,
  List,
  TextInput,
  NumberInput,
} from "@mantine/core";
import { useState } from "react";
import Balance from "./Balance";
import Income from "./Income";

type ExpenseTracks = {
  id: number;
  title: string;
  amount: number;
};

function Expense() {
  const [tracks, setTracks] = useState<ExpenseTracks[]>([]);
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState(0);

  function deposit() {
    const newExpense: ExpenseTracks = {
      id: Math.random(),
      title: reason,
      amount: +amount.toFixed(2),
    };
    setTracks([...tracks, newExpense]);
    setReason("");
    setAmount(0);
  }

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
      <Card.Section withBorder inheritPadding>
        <Text>History</Text>
        {tracks.map((tracks) => (
          <List key={tracks.id}>
            <List.Item>
              {tracks.title} <span>{tracks.amount}</span>
            </List.Item>
          </List>
        ))}
      </Card.Section>
      <Card.Section withBorder inheritPadding>
        <Text>Add New Transaction</Text>
        <TextInput
          label="Title"
          placeholder="Input placeholder"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <NumberInput
          label="Amount"
          placeholder="Input placeholder"
          value={amount}
          onChange={(e) => setAmount(+e)}
        />
        <Button onClick={deposit}>Add</Button>
      </Card.Section>
    </Card>
  );
}

export default Expense;
