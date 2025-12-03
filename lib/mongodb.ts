import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  // don't crash at import-time in client builds; throw when used
  console.warn("MONGODB_URI is not set. Set it in your environment to use MongoDB features.");
}

type CachedClient = {
  client?: MongoClient;
};

declare global {
  // eslint-disable-next-line no-var
  var _mongoCached: CachedClient | undefined;
}

export async function connectToDatabase() {
  if (!uri) throw new Error("Missing MONGODB_URI environment variable");

  if (global._mongoCached && global._mongoCached.client) {
    return global._mongoCached.client;
  }

  const client = new MongoClient(uri);
  await client.connect();
  global._mongoCached = { client };
  return client;
}

export default connectToDatabase;
