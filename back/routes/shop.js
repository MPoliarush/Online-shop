const express = require('express')
const router = express.Router()

const db = require('../data')
const mongodb = require('mongodb')


const ObjectId = mongodb.ObjectId



router.get('/', (req,res)=>{
   console.log('logged')
   res.send('<h1>Server is running</h1>')
})

router.post('/admin', async (req,res)=>{
console.log(req.body)
try{
   const newItem = {
      typeGoods:req.body.typeGoods,
      brand: req.body.brand,
      model: req.body.model,
      imgdepth:req.body.imgdepth,
      type:req.body.type,
      matrix:req.body.matrix,
      mpx:req.body.mpx,
      video:req.body.video,
      exposition:req.body.exposition,
      width:req.body.width,
      height:req.body.height,
      depth:req.body.depth,
      weight:req.body.weight,
      work_price:req.body.work_price,
      weekend_price:req.body.weekend_price,
      week_price:req.body.week_price,
      month_price:req.body.month_price,
      availability:req.body.availability,
     
   }
  
    const result = await db.getDb().collection('cameras').insertOne(newItem)
    console.log(result)

}  catch(error) {
   console.log(error);
 }

})



module.exports = router