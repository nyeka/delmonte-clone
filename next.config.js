/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SUPABASE_URL: process.env.SUPABASE_PROJECT_URL,
    SUPABASE_KEY: process.env.SUPABASE_ANON,
  },
};

module.exports = nextConfig;
