/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/solution",
        destination: "/technology",
        permanent: true,
      },
    ]
  },
}

export default nextConfig