import { TextInput, TagsInput, Button, Group } from "@mantine/core";
import React, { useState } from "react";

type Poll = {
  id: number;
  question: string;
  answers: { option: string; votes: number }[];
  createdAt?: Date;
};

type CreatePollProps = {
  setPolls: React.Dispatch<React.SetStateAction<Poll[]>>;
};

export default function CreatePoll({ setPolls }: CreatePollProps) {
  const [input, setInput] = useState<string>("");
  const [tag, setTag] = useState<string[]>([]);

  function createPoll() {
    const newPoll: Poll = {
      id: Math.random(),
      question: input,
      answers: tag.map((option) => ({ option, votes: 0 })),
      createdAt: new Date(),
    };

    setPolls((prevPolls) => [...prevPolls, newPoll]);
  }

  return (
    <Group mb={20}>
      <TextInput
        placeholder="Ask Question"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <TagsInput
        value={tag}
        onChange={(newTags) => setTag(newTags)}
        placeholder="Enter options"
      />
      <Button onClick={createPoll}>Create Poll</Button>
    </Group>
  );
}
