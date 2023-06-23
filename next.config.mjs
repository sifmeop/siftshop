// import nextTranslate from 'next-translate-plugin'
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.mjs')

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'backend-siftshop.vercel.app',
      'lh3.googleusercontent.com'
    ]
  }
}
export default config
