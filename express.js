import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import ViteExpress from "vite-express";

const PORT = 3000;
const MONGO_USER = "Blingbling"
const MONGO_PASSWORD = "JGGYEF40WqTAEw6a"
const MONGO_CONNECTION_STRING = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@blogposts.vjzww.mongodb.net/?retryWrites=true&w=majority&appName=blogposts`

const app = express();
const client = new MongoClient(MONGO_CONNECTION_STRING);
const database = client.db("blogposts");

app.use(express.json());

app.delete("/api/blogpost/delete/:id", async (request, response) => {
    const id = request.params.id;
    console.log(id);
    await database.collection("latestposts").deleteOne({ _id: new ObjectId(id) });
})

app.get("/api/blogpost/latest", async (_, response) => {
    const Limit = 10;
    
    const data = database.collection("latestposts").find().sort({ _id: -1 }).limit(Limit);
  response.json(await data.toArray());
});

app.post("/api/blogpost/new", async (request, response) => {
    const data = request.body;

    database.collection('latestposts').insertOne(data)
    console.log(data);
})
ViteExpress.listen(app, PORT, () => console.log(`Server running on http://localhost:${PORT}`));