// src/pages/index.tsx
import Link from "next/link";

export default function HomePage() {
  // Later, this will come from your database
  const samplePosts = [
    { id: 1, title: "AI for Healthcare", summary: "Exploring AI in diagnostics." },
    { id: 2, title: "Green Energy Collaboration", summary: "University & Industry research on solar panels." },
    { id: 3, title: "Language Models for Education", summary: "R&D on AI tutors." },
  ];
  
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Nav Bar */}
      <nav className="flex justify-between items-center p-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-600">RD-Pool</h1>
        <div className="space-x-4">
          <Link href="/auth/login" className="text-gray-700 hover:text-blue-600">
            Login
          </Link>
          <Link href="/auth/register" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Content */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-xl font-semibold mb-4">Latest Research Posts</h2>

        <div className="space-y-4">
          {samplePosts.map((post) => (
            <div
              key={post.id}
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-bold text-gray-800">{post.title}</h3>
              <p className="text-gray-600">{post.summary}</p>
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
