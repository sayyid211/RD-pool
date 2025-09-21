# RD-Pool: Research Partnership Matching Platform

RD-Pool is a web application that connects university and industry R&D organizations, enabling them to collaborate on research, funding, and project implementation across various domains. The platform supports partnerships between universities, industry players, and cross-sector collaborations.

## ✨ Features (MVP)
- **Individual Users**:  
  - Sign up / Log in  
  - Create and edit profile  
  - Request to join organization projects  
  - Partner with other individual researchers  

- **Organizations**:  
  - Sign up / Log in  
  - Publish research projects  
  - Accept or reject participant requests  

---

## 🛠️ Tech Stack
- [Next.js](https://nextjs.org/) – React framework for the frontend & API routes  
- [Prisma](https://www.prisma.io/) – Type-safe ORM for the database  
- [PostgreSQL](https://www.postgresql.org/) – Relational database  
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) – For containerized PostgreSQL  
- [TypeScript](https://www.typescriptlang.org/) – Strict typing for better DX  

---

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

rd-pool/
 ┣ prisma/           # Prisma schema & migrations
 ┣ src/
 ┃ ┣ pages/          # Next.js pages (frontend + API routes)
 ┃ ┣ components/     # UI components
 ┃ ┗ lib/            # Helpers (e.g., db connection)
 ┣ .env              # Environment variables
 ┣ package.json
 ┗ README.md
## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deployment

Deploy easily on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

---
