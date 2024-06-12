import { Card, List, Text } from "@mantine/core";
import React from "react";

type History = {
  tracks: { id: number; title: string; amount: number }[];
};

export default function History({ tracks }: History) {
  return (
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
  );
}
