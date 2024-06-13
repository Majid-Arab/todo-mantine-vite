import { Box, Group } from "@mantine/core";
import CreatePoll from "./CreatePoll";
import PollList from "./PollList";

function Poll() {
  return (
    <Box p={50}>
      <CreatePoll />
      <Group grow>
        <PollList />{" "}
      </Group>
    </Box>
  );
}

export default Poll;
