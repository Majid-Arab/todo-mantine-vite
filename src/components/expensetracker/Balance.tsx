import { Card, Title, Text } from "@mantine/core";
import React from "react";

type Balance = {
  balance: number;
};

export default function Balance({ balance }: Balance) {
  return (
    <Card.Section withBorder inheritPadding>
      <Title>Expense Tracker</Title>

      <Text>Your Balance</Text>
      <Title>${balance}</Title>
    </Card.Section>
  );
}
