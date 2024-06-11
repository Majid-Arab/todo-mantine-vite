import { Box, Group } from "@mantine/core";
import { StatsSegments } from "./StatsSegments";
import CreatePoll from "./CreatePoll";

function Poll() {
  return (
    <Box p={50}>
      <CreatePoll />
      <Group grow>
        <StatsSegments />
      </Group>
    </Box>
  );
}

export default Poll;
