import QuizForm from '@/src/components/QuizForm';

export default async function Quiz() {
  return (
    <main className="bg-[url('/bg-primary.jpeg')] bg-cover bg-fixed bg-center">
      <div className="min-h-screen backdrop-blur-md">
        <QuizForm />
      </div>
    </main>
  );
}
