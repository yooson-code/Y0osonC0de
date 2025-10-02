import { NextResponse } from "next/server";
import { fetchGitHubRepos } from "@/utils/github";

export async function GET() {
  try {
    // Force a fresh fetch by bypassing any automatic caching
    const repos = await fetchGitHubRepos();
    return NextResponse.json(repos, { status: 200 });
  } catch (err) {
    console.error("API /api/repos error", err);
    return NextResponse.json(
      { message: "Failed to fetch repos" },
      { status: 500 }
    );
  }
}
