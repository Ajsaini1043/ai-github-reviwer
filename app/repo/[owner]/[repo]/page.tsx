import AIReviewButton from "../../../../components/AIReviewButton";
import { auth } from "../../../../auth";
import { getRepository } from "../../../../lib/github";


interface RepoPageProps {
  params: Promise<{
    owner: string;
    repo: string;
  }>;
}


export default async function RepoPage({ params }: RepoPageProps) {

  const { owner, repo } = await params;

  const session = await auth();


  const repository = await getRepository(
    session?.accessToken!,
    owner,
    repo
  );


  return (
    <main className="min-h-screen bg-black text-white p-10">


      <h1 className="text-4xl font-bold">
        {repository.name}
      </h1>


      <p className="mt-3 text-gray-400">
        {repository.description || "No description"}
      </p>



      <div className="grid grid-cols-2 gap-5 mt-8">


        <div className="bg-white text-black p-5 rounded-xl">
          ⭐ Stars
          <h2 className="text-3xl font-bold">
            {repository.stargazers_count}
          </h2>
        </div>


        <div className="bg-white text-black p-5 rounded-xl">
          🍴 Forks
          <h2 className="text-3xl font-bold">
            {repository.forks_count}
          </h2>
        </div>


        <div className="bg-white text-black p-5 rounded-xl">
          💻 Language
          <h2 className="text-3xl font-bold">
            {repository.language || "N/A"}
          </h2>
        </div>


        <div className="bg-white text-black p-5 rounded-xl">
          🐛 Issues
          <h2 className="text-3xl font-bold">
            {repository.open_issues_count}
          </h2>
        </div>


      </div>



      <a
        href={repository.html_url}
        target="_blank"
        className="inline-block mt-8 bg-blue-600 px-6 py-3 rounded-lg"
      >
        Open GitHub
      </a>

<AIReviewButton repository={repository} />
    </main>
  );
}