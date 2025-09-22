const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
  // Seed Individual
  const alice = await prisma.actor.upsert({
    where: { email: "alice@example.com" },
    update: {},
    create: {
      type: "INDIVIDUAL",
      email: "alice@example.com",
      password: await bcrypt.hash("password123", 10),
      name: "Alice Researcher",
      bio: "Interested in AI for healthcare.",
    },
  });

  // Seed Organization
  const org = await prisma.actor.upsert({
    where: { email: "org@example.com" },
    update: {},
    create: {
      type: "ORGANIZATION",
      email: "org@example.com",
      password: await bcrypt.hash("orgpass123", 10),
      name: "OpenAI Labs",
      bio: "Organization focusing on AI and sustainability research.",
    },
  });

  // Seed Projects for Alice
  await prisma.project.createMany({
    data: [
      {
        title: "AI for Healthcare",
        description: "Exploring AI in medical diagnostics.",
        ownerId: alice.id,
      },
      {
        title: "Language Models for Education",
        description: "Developing AI tutors for schools.",
        ownerId: alice.id,
      },
    ],
    skipDuplicates: true,
  });

  // Seed Projects for Organization
  await prisma.project.createMany({
    data: [
      {
        title: "Green Energy Collaboration",
        description: "Research on solar panel efficiency with university partners.",
        ownerId: org.id,
      },
      {
        title: "AI Safety Initiative",
        description: "Long-term safety in general-purpose AI systems.",
        ownerId: org.id,
      },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Database seeded with actors and projects");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
