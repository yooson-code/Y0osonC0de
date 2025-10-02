export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  stargazers_count: number;
  language: string | null;
  fork: boolean;
}

export interface GitHubApiError {
  message: string;
  documentation_url?: string;
}
