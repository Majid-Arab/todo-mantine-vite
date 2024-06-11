import {
  Card,
  Text,
  Button,
  SimpleGrid,
  Title,
  List,
  TextInput,
} from "@mantine/core";
import { useState } from "react";

type ExpenseTracks = {
  id: number;
  title: string;
  amount: string;
};

function Expense() {
  const [tracks, setTracks] = useState<ExpenseTracks[]>([]);
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState("");

  function deposit() {
    const newExpense: ExpenseTracks = {
      id: Math.random(),
      title: reason,
      amount: amount,
    };
    setTracks([...tracks, newExpense]);
    console.log(newExpense);
  }

  // function handleDelete(id: number) {
  //   const delete = tracks((e: number) => e.id !== id);
  //   setTodos(delete);
  // }
  // const sign = tracks.amount < 0 ? "-" : "+";

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Title>Expense Tracker</Title>

        <Text>Your Balance</Text>
        <Title>$250.00</Title>
      </Card.Section>
      <Card.Section>
        <SimpleGrid cols={2}>
          <div>
            <Title>Income</Title>
            <Title>$250.00</Title>
          </div>
          <div>
            <Title>Income</Title>
            <Title>$250.00</Title>
          </div>
        </SimpleGrid>
      </Card.Section>
      <Card.Section>
        <Text>History</Text>
        {tracks.map((tracks) => (
          <List key={tracks.id}>
            <List.Item className={tracks.amount < "0" ? "minus" : "plus"}>
              {tracks.title}{" "}
              <span>
                {tracks.amount}
                {/* {sign}${Math.abs(tracks.amount)} */}
              </span>
            </List.Item>
          </List>
        ))}
      </Card.Section>
      <Card.Section>
        <Text>New Transaction</Text>
        <TextInput
          label="Title"
          placeholder="Input placeholder"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <TextInput
          label="Amount"
          placeholder="Input placeholder"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button onClick={deposit}>Add</Button>
      </Card.Section>
    </Card>
  );
}

export default Expense;
