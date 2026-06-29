import { auth } from "../auth";
import { loginWithGithub } from "./actions";

export default async function Home() {
  const session = await auth();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-10">
      <h1 className="text-5xl font-bold">
        AI GitHub Reviewer
      </h1>

      <p className="mt-4 text-gray-400 text-lg text-center">
        Analyze your GitHub repositories using AI
        and get code quality insights.
      </p>

      {!session ? (
        <form action={loginWithGithub}>
          <button className="mt-8 bg-white text-black px-6 py-3 rounded-lg font-semibold">
            Connect GitHub
          </button>
        </form>
      ) : (
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold">
            Welcome {session.user?.name}
          </h2>

          <p className="text-gray-400">
            {session.user?.email}
          </p>

          <img
            src={session.user?.image ?? ""}
            alt="Profile"
            className="w-24 h-24 rounded-full mt-4 mx-auto"
          />
        </div>
      )}
    </main>
  );
}