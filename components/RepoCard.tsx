import Link from "next/link";
interface RepoCardProps {
  repo: {
    id: number;
    name: string;
    description: string | null;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    html_url: string;
    owner: {
  login: string;
};
  };
}

export default function RepoCard({ repo }: RepoCardProps) {
  return (
    <div className="bg-white text-black rounded-xl p-5 shadow-lg">

      <h2 className="text-xl font-bold">
        {repo.name}
      </h2>

      <p className="text-gray-600 mt-2">
        {repo.description || "No description available"}
      </p>

      <div className="flex justify-between mt-4 text-sm">
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
        <span>💻 {repo.language || "N/A"}</span>
      </div>
<Link
  href={`/repo/${repo.owner.login}/${repo.name}`}
  className="block mt-5 bg-blue-600 text-white text-center py-2 rounded-lg"
>
  View Details
</Link>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-5 bg-black text-white text-center py-2 rounded-lg"
      >
        Open Repository
      </a>

    </div>
  );
}