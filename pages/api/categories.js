import { query } from "../../app/lib/db";

export default async function handler(req, res) {
  try {
    const querySql =
      "SELECT * from categories;";
    const data = await query({ query: querySql });

    res.status(200).json({ categories: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}