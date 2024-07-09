const express = require('express')
const app = express()
const port = 4000

const main = async() =>{
    await mongosee.connect('')
}

app.get('/',(req:any,res:any) =>{
    res.send('H')
})

app.listen(port,()=>{
    console.log(`backend running on port ${port}`)
})