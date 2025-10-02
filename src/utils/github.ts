import { GitHubRepo } from "../types/github";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "yooson-code";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };

  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }

  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=10`,
    {
      headers,
      // Revalidate every hour
      next: { revalidate: 60 },
    }
  );

  try {
    if (!response.ok) {
      const errorText = await response.text();
      console.error("GitHub API Error Status:", response.status);
      console.error("GitHub API Error:", errorText);
      console.error("GitHub API URL:", response.url);
      return []; // Return empty array instead of throwing error
    }

    const repos: GitHubRepo[] = await response.json();
    console.log("Successfully fetched repositories:", repos.length);

    // Filter and sort repositories
    return repos
      .filter((repo) => !repo.fork) // Remove forks
      .sort((a, b) => b.stargazers_count - a.stargazers_count); // Sort by stars
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}
