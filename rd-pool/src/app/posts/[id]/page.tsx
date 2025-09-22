import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

interface Props {
  params: { id: string };
}

export default async function PostDetail({ params }: Props) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  const project = await prisma.project.findUnique({
    where: { id: params.id },
    include: { owner: true },
  });

  if (!project) {
    return <p>Post not found</p>;
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-gray-600 mt-2">{project.description}</p>
      <p className="text-sm text-gray-500 mt-4">
        By {project.owner.name} ({project.owner.type})
      </p>
    </main>
  );
}
