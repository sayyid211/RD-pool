import prisma from "../src/lib/prisma"; 
import bcrypt from "bcrypt";

async function main() {
  // Create Actors
  const individual = await prisma.actor.upsert({
    where: { email: 'alice@example.com' },
    update: {},
    create: {
      type: 'INDIVIDUAL',
      email: 'alice@example.com',
      password: await bcrypt.hash('password123', 10),
      name: 'Alice Researcher',
      bio: 'Interested in AI for healthcare.',
    },
  });

  const org = await prisma.actor.upsert({
    where: { email: 'org@example.com' },
    update: {},
    create: {
      type: 'ORGANIZATION',
      email: 'org@example.com',
      password: await bcrypt.hash('securepass', 10),
      name: 'GreenTech Labs',
      bio: 'Researching sustainable energy solutions.',
    },
  });

  // Create Projects
  await prisma.project.createMany({
    data: [
      {
        title: 'AI for Healthcare',
        description: 'Exploring AI in diagnostics.',
        ownerId: individual.id,
      },
      {
        title: 'Green Energy Collaboration',
        description: 'University & Industry research on solar panels.',
        ownerId: org.id,
      },
    ],
  });
}

main()
  .then(async () => {
    console.log('✅ Database seeded');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
