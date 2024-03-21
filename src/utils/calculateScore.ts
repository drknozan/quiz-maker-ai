import { Answer, Question } from '@/src/components/QuizForm';

export const calculateScore = (
  questions: Question[],
  userAnswers: Answer[]
): number => {
  let score = 0;

  questions.forEach((question) => {
    const userAnswer = userAnswers.find(
      (answer) => answer.question === question.question
    );

    if (userAnswer) {
      if (userAnswer.answer === question.answer) {
        score += 10;
      }
    }
  });

  return score;
};
