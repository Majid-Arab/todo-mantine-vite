import { Card, SimpleGrid, Title } from "@mantine/core";
import React from "react";

type Income = {
  income: number;
  expense: number;
};

export default function Income({ income, expense }: Income) {
  return (
    <Card.Section withBorder inheritPadding>
      <SimpleGrid cols={2}>
        <div>
          <Title>Income</Title>
          <Title>${income}</Title>
        </div>
        <div>
          <Title>Expense</Title>
          <Title>${expense}</Title>
        </div>
      </SimpleGrid>
    </Card.Section>
  );
}
