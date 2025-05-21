// api/index.js
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

app.use(cors());

app.get('/api/restaurants', async (req, res) => {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/restaurants`, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`
    }
  });
  const data = await response.json();
  res.json(data);
});

app.get('/api/vegan', async (req, res) => {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/restaurants?vegan=eq.true`, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`
    }
  });
  const data = await response.json();
  res.json(data);
});

app.get('/api/gluten-free', async (req, res) => {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/restaurants?gluten_free=eq.true`, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`
    }
  });
  const data = await response.json();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});