require("dotenv").config();

module.exports = {
  env: {
    SITE_NAME: "Sentinel One",
    S1_SITE_GENERATOR_ENDPOINT: process.env.S1_SITE_GENERATOR_ENDPOINT,
    S1_ADMIN_ACCOUNT_ID: process.env.S1_ADMIN_ACCOUNT_ID,
  },
};
