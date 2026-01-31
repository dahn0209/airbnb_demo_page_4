import express from 'express';

const router = express.Router();

const listings=[
    {id:1, name:"Listing One",description:"This is the first listing"},
    {id:2, name:"Listing Two",description:"This is the second listing"},
    {id:3, name:"Listing Three",description:"This is the third listing"},
];  
router.get("/listings",(req,res)=>{
    res.json({data: listings});
})


export default router;