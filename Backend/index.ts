require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express')
const mongosee = require('mongoose')
const app = express()
const port = 4000
let uri = process.env.MONGO_URI

const client = new MongoClient(uri)

const run = async() =>{
    try {
        await client.connect()
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.log(error)
    }finally{
       await client.close()
    }
   
}
run()
    