// src/lib/session.ts
import { cookies } from "next/headers";

/**
 * Represents the payload stored in a user session.
 * @property id - Unique identifier for the user.
 * @property email - User's email address.
 * @property name - User's display name.
 * @property type - Type of actor (e.g., INDIVIDUAL or ORGANIZATION).
 */
export interface SessionPayload {
  id: string;
  email: string;
  name: string;
  type: string;
}

/**
 * Retrieves the current session payload from cookies.
 *
 * Uses Next.js App Router's synchronous cookies API to access the session token.
 * Decodes the session token and parses the payload.
 * Returns null if no valid session is found.
 *
 * @returns {Promise<SessionPayload | null>} The session payload if available, otherwise null.
 */
export async function getSession(): Promise<SessionPayload | null> {
  // cookies() is synchronous in Next.js App Router
  const cookieStore = await cookies();
  const token = cookieStore.get("session");

  if (!token) return null;

  try {
    const payload = JSON.parse(
      Buffer.from(token.value.split(".")[1], "base64").toString()
    );
    return payload as SessionPayload;
  } catch {
    return null;
  }
}
