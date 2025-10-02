"use client";

import dynamic from "next/dynamic";
import type { GitHubRepo } from "@/types/github";
import { useEffect, useState } from "react";

const ProjectSlider = dynamic(() => import("./ProjectSlider"), {
  ssr: false,
});

export default function ProjectSection({ repos }: { repos: GitHubRepo[] }) {
  const [items, setItems] = useState<GitHubRepo[]>(repos);
  const [loading, setLoading] = useState(false);

  // keep items in sync if server re-renders with different initial repos
  useEffect(() => setItems(repos), [repos]);

  const refresh = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/repos");
      if (!res.ok) throw new Error("Failed to fetch");
      const data: GitHubRepo[] = await res.json();
      setItems(data);
    } catch (err) {
      console.error("Refresh repos error:", err);
      alert("Gagal memperbarui repos. Cek token / koneksi Anda.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="projects" className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Featured Projects
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">
            ({items.length} projects)
          </span>
        </h2>
        <div>
          <button
            onClick={refresh}
            disabled={loading}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            {loading ? (
              <svg
                className="w-4 h-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  opacity="0.25"
                />
                <path
                  d="M22 12a10 10 0 00-10-10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </svg>
            ) : (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 4v6h6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 20v-6h-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            <span>{loading ? "Refreshing..." : "Refresh"}</span>
          </button>
        </div>
      </div>

      {items.length <= 4 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
          {items.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="border dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-200 h-full flex flex-col"
            >
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {repo.name}
                </h3>
                {repo.stargazers_count > 0 && (
                  <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {repo.stargazers_count}
                  </span>
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3 flex-grow">
                {repo.description || "No description provided"}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {repo.language && (
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {repo.language}
                  </span>
                )}
                {repo.topics?.map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 truncate max-w-[120px]"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      ) : (
        <ProjectSlider repos={items} />
      )}
    </div>
  );
}
