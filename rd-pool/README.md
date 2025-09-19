# RD-Pool: Research Partnership Matching Platform

RD-Pool is a web application that connects university and industry R&D organizations, enabling them to collaborate on research, funding, and project implementation across various domains. The platform supports partnerships between universities, industry players, and cross-sector collaborations.

## Features

- **Project Matching:** Intelligent keyword-based scoring to match organizations and projects.
- **Project Management:** Create and manage research projects.
- **Partnerships:** Facilitate connections between universities and industry R&D teams.

## Tech Stack

- **Frontend:** Next.js (React 19), Tailwind CSS
- **Backend:** Next.js API routes, Prisma ORM
- **Database:** PostgreSQL (via Docker)
- **ORM:** Prisma
- **Other:** TypeScript, ESLint

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Docker](https://www.docker.com/) (for PostgreSQL database)

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/rd-pool.git
   cd rd-pool
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the PostgreSQL database using Docker:**
   ```bash
   docker-compose up -d
   ```

4. **Set up the database schema:**
   ```bash
   npx prisma migrate dev
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

### Project Structure

- `src/app/page.tsx` – Main landing page
- `src/app/projectForm.tsx` – Project creation and match display form
- `src/app/api/projects/route.ts` – API GET/POST for projects
- `src/app/match.ts` – Keyword scoring match function
- `prisma/schema.prisma` – Database schema

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deployment

Deploy easily on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

---
