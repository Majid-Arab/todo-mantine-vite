import { TextInput, Button, Box, NumberInput } from "@mantine/core";
import React from "react";

type Props = {
  value: string | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onClick: () => void;
};

export function ExpenseForm({ value, onChange, onClick }: Props) {
  return (
    <Box>
      <TextInput
        placeholder="Input component"
        type="text"
        value={value}
        onChange={onChange}
      />
      <NumberInput
        placeholder="Input component"
        type="text"
        value={value}
        onChange={onChange}
      />
      <Button variant="filled" onClick={onClick}>
        Add
      </Button>
    </Box>
  );
}
