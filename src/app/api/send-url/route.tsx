require("dotenv").config();
const { MongoClient, ServerApiVersion, db } = require("mongodb");
const port = 4000;

export async function GET(req: { method: string }) {
  if (req.method == "GET") {
    return Response.json("response test");
  }
}

/*
let uri = process.env.MONGO_URI;


const run = async () => {
  try {
    await client.connect();
    const gettingStarted = await client.db("gettingStarted");
    const people = await gettingStarted.collection("people");
    await people.insertOne({
      name: "test",
    });
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

run();
*/
