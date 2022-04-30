const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

require('dotenv').config();
app.use(cors());
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.amvjj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });




async function run() {
    try {
        await client.connect()
        const volunteerCollection = client.db("volunteerNetwork").collection("volunteers");
        const eventCollection = client.db("volunteerNetwork").collection("event")
        console.log('db connected')
        // get all data 
        // http://localhost:5000/volunteers
        app.get('/volunteers', async (req, res) => {
            // const searchText = req.body.name;
            // const data=searchText || ''
            // const query ={name:data}
            const query = {};
            const cursor = volunteerCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);
        });

        // create
        app.post('/volunteer', async (req, res) => {
            const query = req.body;
            const result = await volunteerCollection.insertOne(query)
            res.send(result)
        });
        //update
        app.put('/volunteer/:id', async (req, res) => {
            const id = req.params.id;
            const data = req.body;
            const filter = { _id: ObjectId(id) };
            const options = { upsert: true };
            const updateData = {
                $set: {
                    name: data.name
                }
            };
            const result = await volunteerCollection.updateOne(filter, updateData, options);
            res.send(result);
        });
        //delete
        app.delete('/volunteer/:id', async (req, res) => {
            const id = req.params.id;
            console.log('delete', id)
            const filter = { _id: ObjectId(id) }
            const result = await volunteerCollection.deleteOne(filter)
            res.send(result);
        });

        // create event
        app.post('/events', async (req, res) => {
            const event = req.body;
            const result = await eventCollection.insertOne(event);
            res.send(result);
        })
    }
    finally {

    }
};
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Server running..')
});

app.listen(port, () => {
    console.log('Listening to port', port);
})