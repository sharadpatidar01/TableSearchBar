import express from 'express';
const app=express();
import cors from 'cors';
app.use(cors());
import Users from './user.js';

app.get('/',(req,res)=>{
    //Search Query
    const {q}=req.query;

    //Search Function
    const search = (data) => {
        const keys=["firstName","lastName","email","gender"]
        return data.filter(
            (item) =>
            keys.some((value)=>item[value].toLowerCase().includes(q))
            );
    }

    //Search Function call with Users data
    res.json(search(Users).splice(0,10))
})

app.listen(5000, ()=>{
    console.log("API is running on port 5000")
})





