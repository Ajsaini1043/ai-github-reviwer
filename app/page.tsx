export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-10">
      <h1 className="text-5xl font-bold">
        AI GitHub Reviewer
      </h1>

      <p className="mt-4 text-gray-400 text-lg text-center">
        Analyze your GitHub repositories using AI
        and get code quality insights.
      </p>

      <button className="mt-8 bg-white text-black px-6 py-3 rounded-lg font-semibold">
        Connect GitHub
      </button>
    </main>
  );
}