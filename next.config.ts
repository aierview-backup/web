import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configura o Webpack para suportar arquivos SVG com @svgr/webpack
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },

  // Configuração do TurboPack (Next.js futuro)
  turbopack: {
    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  // Cabeçalhos HTTP para evitar erros de política de segurança
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "unsafe-none", // Necessário para permitir window.postMessage de outras origens
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "unsafe-none", // Evita bloqueio de recursos externos
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin", // Política segura e recomendada
          },
        ],
      },
    ];
  },
};

export default nextConfig;
