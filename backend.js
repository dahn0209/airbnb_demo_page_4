import express from "express";

import mainRoutes from "./routes/index.js";


const app=express();
const PORT=process.env.PORT || 3000;


app.use(express.static("frontend"));
app.use("/api",mainRoutes);

// app.get("/",(req,res)=>{
//     res.send("Hello, Home!");
// }
// )

// const listings=[
//     {id:1, name:"Listing One",description:"This is the first listing"},
//     {id:2, name:"Listing Two",description:"This is the second listing"},
//     {id:3, name:"Listing Three",description:"This is the third listing"},
// ];  
// app.get("/api/listings",(req,res)=>{
//     res.json({data: listings});
// })

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}
)
