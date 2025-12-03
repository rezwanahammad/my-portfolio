/**
 * Seed script for inserting sample projects into the `projects` collection.
 * Usage: set MONGODB_URI then run `node scripts/seed.js`
 */
const { MongoClient } = require("mongodb");

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("Please set MONGODB_URI environment variable");
    process.exit(1);
  }

  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db();
    const projects = db.collection("projects");

    const sample = [
      {
        title: "BanglaOdyssey",
        description: "A modern and visually appealing Next.js web app that showcases the beauty of Bangladesh.",
        image: "/bangla.png",
        techs: ["Next.js", "MongoDB"],
        href: "https://github.com/rezwanahammad/banglaodyssey",
      },
      {
        title: "Edusity",
        description: "An educational platform that allows users to create, share, and discover courses.",
        image: "/edusity.png",
        techs: ["Firebase", "React"],
        href: "https://github.com/rezwanahammad/edusity_clone",
      },
      {
        title: "NewsBit",
        description: "A news aggregation android app that provides the latest news from various sources.",
        image: "/newsbit.png",
        techs: ["Android Studio", "Firebase"],
        href: "https://github.com/rezwanahammad/NewsBit",
      },
    ];

    // replace existing sample projects that share title
    for (const p of sample) {
      await projects.updateOne({ title: p.title }, { $set: p }, { upsert: true });
      console.log("Upserted", p.title);
    }

    console.log("Done seeding projects.");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();
