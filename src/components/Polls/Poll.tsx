import { useState } from "react";
import { Box, Group } from "@mantine/core";
import CreatePoll from "./CreatePoll";
import PollList from "./PollList";

type Poll = {
  id: number;
  question: string;
  answers: { option: string; votes: number }[];
  createdAt?: Date;
};

function Poll() {
  const [polls, setPolls] = useState<Poll[]>([]);

  return (
    <Box p={50}>
      <CreatePoll setPolls={setPolls} />
      <Group grow>
        <PollList polls={polls} setPolls={setPolls} />{" "}
      </Group>
    </Box>
  );
}

export default Poll;
