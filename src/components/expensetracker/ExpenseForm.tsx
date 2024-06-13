import { TextInput, Text, Button, NumberInput, Card } from "@mantine/core";
import { useExpenseStore } from "../../store";
import { useState } from "react";

export function ExpenseForm() {
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState(0);
  const { deposit } = useExpenseStore((state) => state);
  return (
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
        value={String(amount)}
        onChange={(e) => setAmount(Number(e))}
      />
      <Button
        onClick={() =>
          deposit({
            title: reason,
            amount: +amount.toFixed(2),
          })
        }
      >
        Add
      </Button>
    </Card.Section>
  );
}
