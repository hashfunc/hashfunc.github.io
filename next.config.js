/** @type {import('next').NextConfig} */
const assetPrefix =
  process.env.NODE_ENV === "production" ? "hashfunc.github.io" : "";
module.exports = {
  reactStrictMode: true,
  assetPrefix,
};
