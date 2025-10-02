// src/lib/supabase.js
import postgres from 'postgres';
import 'dotenv/config';

// --- DB via native Postgres (for queries)
const { DATABASE_URL, SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY } = process.env;

if (!DATABASE_URL) {
  throw new Error('Missing DATABASE_URL in .env');
}

// Force SSL (also present in the URL)
export const sql = postgres(DATABASE_URL, {
  max: 10,
  idle_timeout: 30,
});


