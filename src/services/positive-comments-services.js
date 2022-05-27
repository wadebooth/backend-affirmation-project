import { getPositiveComments } from "../gateway/mongo.js";

export const createComments = async (comment) => {
  const col = await getPositiveComments();
  const { insertedId } = await col.insertOne({ comment });
  return insertedId;
};

export const getComment = async (statement) => {
  const col = await getPositiveComments();
  const comment = await col.findOne({ statement });

  return comment;
};

export const getComments = async () => {
  const col = await getPositiveComments();
  const comments = await col.find({}).toArray();

  return comments;
};
