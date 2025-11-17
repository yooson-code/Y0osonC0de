import Image from "next/image";
import { fetchGitHubRepos } from "../utils/github";
import ProjectSection from "@/components/ProjectSection";
import ButtonContact from "@/components/ButtonContact";
import { FaCode, FaServer, FaShieldAlt, FaTools } from "react-icons/fa";

export default async function Home() {
  const repos = await fetchGitHubRepos();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section
        id="home"
        className=" bg-gray-100 dark:bg-[#24292f] text-gray-900 dark:text-white"
      >
        <div className="mx-auto max-w-5xl px-4">
          <div className="min-h-[100vh] grid md:grid-cols-2 items-center gap-8">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-start">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-white bg-white">
                <Image
                  src="/Desain tanpa judul.png" // ganti dengan fotomu, ex: /avatar.jpg
                  alt="Profile"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Samson Abdullah{" "}
                <span className="block md:inline text-lg md:text-xl font-semibold text-gray-400">
                  — Y0osonC0de
                </span>
              </h1>
              <p className="mt-2 text-base md:text-lg text-gray-600 dark:text-gray-300">
                Cyber Security Enthusiast
              </p>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Exploring vulnerabilities and building practical security
                solutions.
              </p>

              {/* CTA */}
              <div className="mt-6 flex flex-wrap items-center gap-4 justify-center md:justify-start">
                <a
                  href="/Samson_Abdullah_1025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg font-semibold bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition"
                >
                  Download CV
                </a>
                <ButtonContact />
              </div>

              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                {" "}
                <div className="flex items-center gap-2">
                  {" "}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />{" "}
                  </svg>{" "}
                  <span>5+ Years Experience</span>{" "}
                </div>{" "}
                <div className="flex items-center gap-2">
                  {" "}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />{" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />{" "}
                  </svg>{" "}
                  <span>Pasar Minggu, Jakarta Selatan</span>{" "}
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Debug section removed - theme toggle working */}
        {/* Project Pinned Repositories Section */}
        <div id="projects">
          <ProjectSection repos={repos} />
        </div>

        {/* Work Experience Section */}
        <div className="mb-12 relative">
          <h2 className="text-xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
            Work Experience
          </h2>

          {/* Timeline container */}
          <div id="work" className="relative space-y-8">
            {/* Vertical line */}
            <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

            {/* Experience 1 */}
            <div className="relative pl-8">
              {/* Timeline dot */}
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full border-2 border-blue-500 bg-white dark:bg-gray-800"></div>

              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Account Officer
                </h3>
                <span className="text-sm text-blue-500 dark:text-blue-400 md:ml-2">
                  @ BMT Rukun Abadi
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 md:ml-auto">
                  Sept 2022 - Present
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                <li>
                  Implemented comprehensive security measures resulting in a 40%
                  reduction in security incidents
                </li>
                <li>
                  Conducted regular security assessments and penetration testing
                  on company infrastructure
                </li>
                <li>
                  Developed and maintained security documentation and procedures
                </li>
                <li>
                  Led security awareness training programs for over 200
                  employees
                </li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="relative pl-8">
              {/* Timeline dot */}
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full border-2 border-green-500 bg-white dark:bg-gray-800"></div>

              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Computer Technician
                </h3>
                <span className="text-sm text-green-500 dark:text-green-400 md:ml-2">
                  @ Self Employee
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 md:ml-auto">
                  Freelance
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                <li>
                  Monitored and analyzed security alerts from various security
                  tools
                </li>
                <li>
                  Participated in incident response and vulnerability management
                </li>
                <li>
                  Assisted in implementing security controls and best practices
                </li>
                <li>
                  Created detailed reports on security findings and
                  recommendations
                </li>
              </ul>
            </div>

            {/* Experience 3 */}
            <div className="relative pl-8">
              {/* Timeline dot */}
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full border-2 border-purple-500 bg-white dark:bg-gray-800"></div>

              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Warehouse
                </h3>
                <span className="text-sm text-purple-500 dark:text-purple-400 md:ml-2">
                  @ Vanderism
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 md:ml-auto">
                  Freelance
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                <li>
                  Assisted in security assessments and vulnerability scanning
                </li>
                <li>Learned and applied cybersecurity best practices</li>
                <li>Contributed to documentation of security procedures</li>
                <li>Participated in security awareness training development</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Pinned Repositories Section */}

        {/* Skills & Technologies Section */}
        <div id="about" className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Skill Category 1 */}
            <div className="border dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <FaCode
                  className="text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />
                Frontend
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            {/* Skill Category 2 */}
            <div className="border dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <FaServer
                  className="text-emerald-600 dark:text-emerald-400"
                  aria-hidden="true"
                />
                Backend
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>

            {/* Skill Category 3 */}
            <div className="border dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <FaShieldAlt
                  className="text-rose-600 dark:text-rose-400"
                  aria-hidden="true"
                />
                Cyber Security
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>Recon</li> {/* perbaiki dari Reccon -> Recon */}
                <li>Pentest</li>
                <li>Forensic</li>
                <li>Monitoring</li>
              </ul>
            </div>

            {/* Skill Category 4 */}
            <div className="border dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <FaTools
                  className="text-amber-600 dark:text-amber-400"
                  aria-hidden="true"
                />
                Tools
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>Git</li>
                <li>VS Code</li>
                <li>Figma</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Get in Touch
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/yooson-code"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/samson-abdullah-8a062a249/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="mailto:gmsams313@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
