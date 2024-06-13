import { TextInput, TagsInput, Button, Group } from "@mantine/core";
import { useState } from "react";
import { usePolls } from "../../store";

export default function CreatePoll() {
  const [input, setInput] = useState<string>("");
  const [tag, setTag] = useState<string[]>([]);

  const { createPoll } = usePolls((state) => state);

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
      <Button
        onClick={() =>
          createPoll({
            question: input,
            answers: tag.map((ans) => ({ option: ans, votes: 0 })),
          })
        }
      >
        Create Poll
      </Button>
    </Group>
  );
}
