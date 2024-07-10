const express = require('express')
const mongosee = require('mongoose')
const app = express()
const port = 4000

const main = async() =>{
    await mongosee.connect('mongodb://localhost:27017/',(err:any,db:any) => {
        console.log('database connected')
        const test1 = db.collection('testDb')

        test1.insertOne({name:'test'}, (err:any,result:any) =>{
            console.log('created!')
        })
    })
}

app.get('/',(req:any,res:any) =>{
    main()
    res.send('H')
})

app.listen(port,()=>{
    console.log(`backend running on port ${port}`)
})