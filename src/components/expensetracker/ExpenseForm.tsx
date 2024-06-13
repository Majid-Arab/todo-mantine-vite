import { TextInput, Text, Button, NumberInput, Card } from "@mantine/core";
import { useTracker } from "../../store";

type Form = {
  amount: number;
  reason: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onAmountChange: ((value: string | number) => void) | undefined;
  // onAdd: () => void;
};

export function ExpenseForm({
  amount,
  reason,
  onChange,
  onAmountChange,
}: // onAdd,
Form) {
  const { deposit } = useTracker((state) => state);
  return (
    <Card.Section withBorder inheritPadding>
      <Text>Add New Transaction</Text>
      <TextInput
        label="Title"
        placeholder="Input placeholder"
        value={reason}
        onChange={onChange}
      />
      <NumberInput
        label="Amount"
        placeholder="Input placeholder"
        value={String(amount)}
        onChange={onAmountChange}
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
