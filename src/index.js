import express from "express";
import cors from "cors";
import {
  createComments,
  getComments,
} from "./services/positive-comments-services.js";
import { commentsRouter } from "./routes/comments.js";

// dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(commentsRouter);
app.get("/messages", async (request, response) => {
  const comments = await getComments();
  response.send(comments);
});
app.post("/messages", async (request, response) => {
  const comments = await createComments(request.body.comment);
  response.send(comments);
});

app.listen(3000, () => {
  console.log("Listening on Port: 3000");
});
