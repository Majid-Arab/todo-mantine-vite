import { TextInput, Button, Box } from "@mantine/core";
import React from "react";

type Props = {
  value: string | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onClick: () => void;
};

export function TodoInput({ value, onChange, onClick }: Props) {
  return (
    <Box>
      <TextInput
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
