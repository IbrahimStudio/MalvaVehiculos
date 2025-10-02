// src/models/truck.model.js
import { sql } from '../lib/supabase.js';

// NOTE: Your table is "Trucks" (capital T). We quote it to be safe.
export async function listTrucks({ maxPrice } = {}) {
  let query = sql`
    SELECT id, name, description, price, imgs, created_at
    FROM "Trucks"
  `;

  const where = [];
  if (typeof maxPrice === 'number') {
    where.push(sql`price <= ${maxPrice}`);
  }

  if (where.length) {
    query = sql`${query} WHERE ${sql.join(where, sql` AND `)}`;
  }

  query = sql`${query} ORDER BY created_at DESC`;

  const rows = await query; // postgres returns JS objects
  return rows;
}
