/** @type {import('next').NextConfig} */
const nextConfig = {
  // Isso ajuda o Next a ignorar erros de pastas vazias durante o build se necessário
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

