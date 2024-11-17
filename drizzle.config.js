/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:EXP7irTM2bek@ep-withered-pond-a5my1f3q.us-east-2.aws.neon.tech/CarMarketplace?sslmode=require",
  },
};
