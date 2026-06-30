"use client";

import { useMemo, useState } from "react";
import RepoCard from "./RepoCard";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
}

interface RepoListProps {
  repos: Repo[];
}

export default function RepoList({ repos }: RepoListProps) {
  const [search, setSearch] = useState("");

  const filteredRepos = useMemo(() => {
    return repos.filter((repo) =>
      repo.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [repos, search]);

  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="🔍 Search repositories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-lg text-black mb-6"
      />

      {filteredRepos.length === 0 ? (
        <p className="text-center text-gray-400">
          No repositories found.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
}