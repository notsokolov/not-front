const path = require("path");
const withSourceMaps = require("@zeit/next-source-maps");
// ()
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

module.exports = withSourceMaps({
  images: {
    domains: ["pbs.twimg.com", "192.168.0.103"],
  },
  env: {},
  webpack: (config, { isServer }) => {
    config.resolve.alias["~"] = path.resolve("./src");

    if (!isServer) {
      config.resolve.alias["@sentry/node"] = "@sentry/browser";
    }

    return config;
  },
});
