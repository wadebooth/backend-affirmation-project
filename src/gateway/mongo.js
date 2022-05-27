import { MongoClient } from "mongodb";

export const getDb = async () => {
  const mongoURI = `mongodb+srv://admin:UhZr184TErrtSeY3@cluster0.0exk9.mongodb.net/`;
  const client = new MongoClient(mongoURI);
  await client.connect();

  return client.db("mongo-positivecomments");
};

export const getPositiveComments = async () => {
  const db = await getDb();

  return db.collection("messages");
};
