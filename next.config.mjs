const nextConfig = {
  transpilePackages: ['next-mdx-remote'],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('chrome-aws-lambda')
    }
    return config
  },
}

export default nextConfig
