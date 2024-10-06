import env from "dotenv";
env.config();

import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function getCollection() {
  try {
    await client.connect();
    const db = client.db("bookshelf");
    return db.collection("books");
  } catch {
    await client.close();
  }
}

insertBook();
async function insertBook() {
  const col = await getCollection();
  // const result = await col.insertOne({title: 'こんにちは'})
  const result = await col.insertMany([
    {
      title: "こんにちは",
      int: 10,
      bool: true,
      dt: new Date(),
      arry: [0, 1, 2],
      obj: { bye: "さようなら" },
    },
    { title: "こんにちは2" },
    { title: "こんにちは3" },
    { title: "こんにちは4" },
  ]);

  console.log(result);

  await client.close();
}
