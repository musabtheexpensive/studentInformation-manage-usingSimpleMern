const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const uri =
  "mongodb+srv://everystudent:439NTWng3w4VlHrk@cluster0.3mpc6hz.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const studentInformation = client
      .db("studentDB")
      .collection("studentInformation");

    // add a new student api data
    app.post("/addStudent", async (req, res) => {
      const addStudent = req.body;
      console.log(addStudent);
      const result = await studentInformation.insertOne(addStudent);
      res.send(result);
    });

    // get all student data from db
    app.get("/students", async (req, res) => {
      const cursor = studentInformation.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // get one student information
    app.get("/students/:roll", async (req, res) => {
      const roll = req.params.roll;
      const query = { roll: roll };
      const result = await studentInformation.findOne(query);
      res.send(result);
    });

    // delete a students data
    app.delete("/students/:roll", async (req, res) => {
      const roll = req.params.roll;
      const query = { roll: roll };
      const result = await studentInformation.deleteOne(query);
      res.send(result);
    });
    
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("student is active");
});

app.listen(port, () => {
  console.log(`Student Server Is Running On port ${port}`);
});
