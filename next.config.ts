import BuilderDevTools from "@builder.io/dev-tools/next"
import createNextIntlPlugin from "next-intl/plugin"
import type { NextConfig } from "next"

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = BuilderDevTools()({
  images: {
    domains: ["cdn.builder.io"],
  },
  reactStrictMode: true,
})

export default withNextIntl(nextConfig)
