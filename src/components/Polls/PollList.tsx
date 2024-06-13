import { Box, Paper, Text, Group, Button, Progress } from "@mantine/core";
import { usePolls } from "../../store";

export default function PollList() {
  const { polls, vote } = usePolls((state) => state);

  return (
    <Box>
      {polls.map((poll) => (
        <Paper key={poll.id} p="md" withBorder>
          <Text>{poll.question}</Text>
          {poll.answers.map((answer, index) => {
            const totalVotes = poll.answers.reduce((a, b) => a + b.votes, 0);
            const votePercentage = totalVotes
              ? (answer.votes / totalVotes) * 100
              : 0;
            return (
              <Group key={index}>
                <Text>{answer.option}</Text>
                <Progress
                  value={votePercentage}
                  color="blue"
                  size="lg"
                  radius="xl"
                  style={{ flexGrow: 1, marginRight: 10 }}
                />
                <Text>{votePercentage.toFixed(2)}%</Text>
                <Button onClick={() => vote(poll.id, index)}>Vote</Button>
              </Group>
            );
          })}
        </Paper>
      ))}
    </Box>
  );
}
