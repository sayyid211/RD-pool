// src/app/page.tsx
/**
 * Home page component for RD Pool.
 * Fetches and displays a list of research projects from the database.
 * Shows login/signup options if the user is not authenticated.
 *
 * @returns {JSX.Element} The rendered homepage.
 */
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";

export default async function HomePage() {
  // check if logged in
  const session = await getSession();

  // fetch projects with owners (Actors)
  const projects = await prisma.project.findMany({
    include: {
      owner: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="container mx-auto p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">RD Pool Projects</h1>

        {session ? (
          <span className="text-gray-700">
            Logged in as <b>{session.name}</b>
          </span>
        ) : (
          <div className="space-x-4">
            <Link
              href="/auth/login"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Sign Up
            </Link>
          </div>
        )}
      </header>

      <section>
        {projects.length === 0 ? (
          <p className="text-gray-600">No projects available yet.</p>
        ) : (
          <ul className="space-y-4">
            {projects.map((project) => (
              <li
                key={project.id}
                className="p-4 border rounded shadow hover:bg-gray-50"
              >
                <Link
                  href={`/posts/${project.id}`}
                  className="text-xl font-semibold text-blue-700 hover:underline"
                >
                  {project.title}
                </Link>
                <p className="text-gray-700">{project.description}</p>
                <p className="text-sm text-gray-500">
                  By {project.owner.name} ({project.owner.type.toLowerCase()}) on{" "}
                  {new Date(project.createdAt).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
