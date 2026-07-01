export async function getGithubUser(accessToken: string) {
  const response = await fetch(
    "https://api.github.com/user",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github+json",
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("GitHub user fetch failed");
  }

  return response.json();
}



export async function getGithubRepos(accessToken: string) {
  const response = await fetch(
    "https://api.github.com/user/repos?sort=updated&per_page=10",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github+json",
      },
      cache: "no-store",
    }
  );


  if (!response.ok) {
    throw new Error("GitHub repos fetch failed");
  }


  return response.json();
}




export async function getRepository(
  accessToken: string,
  owner: string,
  repo: string
) {

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github+json",
      },
      cache: "no-store",
    }
  );


  if (!response.ok) {
    throw new Error("Repository fetch failed");
  }


  return response.json();

}