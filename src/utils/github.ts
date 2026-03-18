export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  language: string;
  stargazers_count: number;
  fork: boolean;
}

export interface RepoDetails {
  readme: string;
  languages: string[];
}

const getHeaders = (token?: string) => {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github.v3+json',
  };
  if (token) {
    headers.Authorization = `token ${token}`;
  }
  return headers;
};

export async function fetchUserRepos(input: string): Promise<GitHubRepo[]> {
  const isToken = input.startsWith('ghp_') || input.startsWith('github_pat_') || input.length > 30; // quick heuristic
  const token = isToken ? input : undefined;
  
  let url = '';
  if (token) {
    url = 'https://api.github.com/user/repos?sort=updated&per_page=100';
  } else {
    const username = input.trim();
    if (!username) throw new Error("Please provide a valid GitHub username or Personal Access Token.");
    url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`;
  }

  const response = await fetch(url, { headers: getHeaders(token) });
  if (!response.ok) {
    if (response.status === 404) throw new Error("User not found.");
    if (response.status === 401) throw new Error("Invalid token.");
    if (response.status === 403) throw new Error("API rate limit exceeded. Try using a Personal Access Token.");
    throw new Error("Failed to fetch repositories.");
  }
  
  const repos: GitHubRepo[] = await response.json();
  // Filter out forks and sort by stars
  return repos.filter(repo => !repo.fork).sort((a, b) => b.stargazers_count - a.stargazers_count);
}

export async function fetchRepoDetails(owner: string, repo: string, input?: string): Promise<RepoDetails> {
  const isToken = input && (input.startsWith('ghp_') || input.startsWith('github_pat_') || input.length > 30);
  const token = isToken ? input : undefined;
  const headers = getHeaders(token);

  try {
    // Fetch languages
    const langRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`, { headers });
    const languagesMap = langRes.ok ? await langRes.json() : {};
    const languages = Object.keys(languagesMap);

    // Fetch README
    const readmeRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, { 
      headers: { ...headers, Accept: 'application/vnd.github.v3.raw' } 
    });
    const readme = readmeRes.ok ? await readmeRes.text() : "No README available.";

    return {
      readme,
      languages
    };
  } catch (err: any) {
    console.error("Error fetching repo details", err);
    throw new Error("Failed to fetch repository details.");
  }
}
