import RepoCard from "../components/RepoCard";
import { getGithubUser, getGithubRepos } from "../lib/github";
import ProfileCard from "../components/ProfileCard";
import { auth } from "../auth";
import RepoList from "../components/RepoList";
import { loginWithGithub, logout } from "./actions";

export default async function Home() {
  const session = await auth();

  let githubUser: any = null;
  let repos: any[] = [];

  if (session?.accessToken) {
    githubUser = await getGithubUser(
      session.accessToken
    );

    repos = await getGithubRepos(
      session.accessToken
    );
  }

  console.log(githubUser);
  console.log(repos);
  console.log(session);

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


          {githubUser && (
            <ProfileCard user={githubUser} />
          )}
          <div className="mt-10 w-full max-w-5xl">
            <h2 className="text-3xl font-bold mb-6">
              Your Repositories
            </h2>

            <RepoList repos={repos} />
          </div>

          <form action={logout}>
            <button
              className="mt-6 bg-red-500 px-6 py-2 rounded-lg font-semibold"
            >
              Logout
            </button>
          </form>


        </div>

      )}

    </main>
  );
}