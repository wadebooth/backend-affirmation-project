import { Router } from "express";
import { createComments } from "../services/positive-comments-services.js";

export const commentsRouter = Router();

commentsRouter.post("/comments", async (req, res) => {
  const comments = req.body;
  const id = await createComments(comments);
  res.send(id.toString());
});
