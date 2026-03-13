const { connectDB, disconnectDB } = require("./db");

(async () => {
  const uri = process.env.MONGO_URI || "mongodb://localhost:27017/pft";

  try {
    await connectDB(uri);
    console.log("Migration step completed.");
  } catch (err) {
    console.error("Migration failed:", err);
  } finally {
    await disconnectDB();
  }
})();