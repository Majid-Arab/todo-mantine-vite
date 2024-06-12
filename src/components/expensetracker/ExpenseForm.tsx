import { TextInput, Text, Button, NumberInput, Card } from "@mantine/core";

type Form = {
  amount: number;
  reason: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onAmountChange: ((value: string | number) => void) | undefined;
  onAdd: () => void;
};

export function ExpenseForm({
  amount,
  reason,
  onChange,
  onAmountChange,
  onAdd,
}: Form) {
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
      <Button onClick={onAdd}>Add</Button>
    </Card.Section>
  );
}
