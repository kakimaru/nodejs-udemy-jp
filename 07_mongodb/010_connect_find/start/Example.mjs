import env from 'dotenv'
import { MongoClient, ServerApiVersion } from 'mongodb';

env.config()

const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function getCollection() {
  try {
    await client.connect();
    const db = client.db('bookshelf');
    return db.collection('books');
  } catch {
    await client.close();
  }
}

async function getAllBooks() {
  const col = await getCollection()
  const cursor = col.find()
  const result = await cursor.toArray()
  console.log(result)

  await client.close();
}

getAllBooks()