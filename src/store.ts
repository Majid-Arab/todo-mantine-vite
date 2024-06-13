import { create } from "zustand";

type Poll = {
  id: number;
  question: string;
  answers: { option: string; votes: number }[];
  createdAt?: Date;
};

type PollStore = {
  polls: Poll[];
  createPoll: (poll: Omit<Poll, "id" | "createdAt">) => void;
  vote: (pollId: number, answerIndex: number) => void;
};

export const usePolls = create<PollStore>((set, get) => ({
  polls: [],
  createPoll: (poll) => {
    const newPoll: Poll = {
      id: Math.random(),
      createdAt: new Date(),
      ...poll,
    };
    set({ polls: [...get().polls, newPoll] });
  },
  vote: (pollId, answerIndex) => {
    const polls = get().polls;
    const newPolls = polls.map((poll) =>
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
    );

    set({ polls: newPolls });
  },
}));
