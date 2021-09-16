// NextJs config file

const path = require("path");
const { i18n } = require("./next-i18next.config");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "assets")],
  },
  publicRuntimeConfig: {
    domain: process.env.DOMAIN_NAME,
    appName: process.env.APP_NAME,
    // Tracking
    googleAnalyticsTrackingCode: process.env.GOOGLE_ANALYTICS_TRACKING_CODE,
  },
  i18n,
};
