import Link from "next/link";
import { prisma } from "@/lib/prisma"; // <-- make sure this points to your prisma client
import { getServerSession } from "next-auth"; // if using next-auth
import { authOptions } from "@/lib/auth"; // configure your next-auth options

export default async function HomePage() {
  const posts = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
    include: { owner: true },
  });

  const session = await getServerSession(authOptions);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Nav Bar */}
      <nav className="flex justify-between items-center p-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-600">RD-Pool</h1>
        <div className="space-x-4">
          {session ? (
            <span className="text-gray-700">
              Welcome, <strong>{session.user?.name}</strong>
            </span>
          ) : (
            <>
              <Link href="/auth/login" className="text-gray-700 hover:text-blue-600">
                Login
              </Link>
              <Link
                href="/auth/register"
                className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Content */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-xl font-semibold mb-4">Latest Research Posts</h2>

        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-bold text-gray-800">{post.title}</h3>
              <p className="text-gray-600">{post.description}</p>
              <p className="text-sm text-gray-500">By {post.owner.name}</p>
              <Link
                href={`/posts/${post.id}`}
                className="text-blue-600 hover:underline"
              >
                View Details (Login Required)
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
