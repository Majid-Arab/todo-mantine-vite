import { TextInput, TagsInput, Button, Group } from "@mantine/core";
import { useState } from "react";

type Poll = {
  id: number;
  question: string;
  answers: string[];
  createdAt?: Date;
};

const data: Poll[] = [
  {
    id: 1,
    question: "What is JS fullform",
    answers: ["Jason", "JavaScript", "jackset"],
    createdAt: new Date(),
  },
];

export default function CreatePoll() {
  const [polls, setPolls] = useState<Poll[]>(data);
  const [input, setInput] = useState("");
  const [tag, setTag] = useState([""]);

  function createPoll() {
    const newPoll: Poll = {
      id: Math.random(),
      question: input,
      answers: tag,
    };

    setPolls([...polls, newPoll]);
    console.log("created");
  }

  return (
    <Group mb={20}>
      <TextInput
        placeholder="Ask Question"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <TagsInput
        placeholder="Enter tags"
        maxTags={4}
        value={tag}
        onChange={(newTags) => setTag(newTags)}
        clearable
      />
      <Button onClick={createPoll}>Create Poll</Button>
    </Group>
  );
}
