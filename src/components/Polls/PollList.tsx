import { Box, Paper, Text, Group, Button, Progress } from "@mantine/core";

type Poll = {
  id: number;
  question: string;
  answers: { option: string; votes: number }[];
  createdAt?: Date;
};

type PollListProps = {
  polls: Poll[];
  setPolls: React.Dispatch<React.SetStateAction<Poll[]>>;
};

export default function PollList({ polls, setPolls }: PollListProps) {
  function vote(pollId: number, answerIndex: number) {
    setPolls((prevPolls) =>
      prevPolls.map((poll) =>
        poll.id === pollId
          ? {
              ...poll,
              answers: poll.answers.map((answer, index) =>
                index === answerIndex
                  ? { ...answer, votes: answer.votes + 1 }
                  : answer
              ),
            }
          : poll
      )
    );
  }

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
