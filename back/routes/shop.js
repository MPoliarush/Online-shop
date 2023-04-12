const express = require('express')
const router = express.Router()
const path = require('path')
const multer= require('multer')
const db = require('../data')
const mongodb = require('mongodb')

const ObjectId = mongodb.ObjectId


const storageConfig = multer.diskStorage({
   destination:(req,file,cb)=>{
     cb(null,path.join(__dirname, '../uploadedIMG'))
   },
   filename:(req,file,cb)=>{
     cb(null, file.originalname)
   }
 })

const upload = multer({
   storage:storageConfig
})




router.get('/', (req,res)=>{
   console.log('logged')
   res.send('<h1>Server is running</h1>')
})

router.post('/admin',upload.array("imgS"), async (req,res)=>{

   const imgS = req.files
   console.log(req.files)
 
const rawData = req.body.input
const data = JSON.parse(rawData)


try{
   const newItem = {
      typeGoods:data.typeGoods,
      brand: data.brand,
      model: data.model,
      imgdepth:data.imgdepth,
      type:data.type,
      matrix:data.matrix,
      mpx:data.mpx,
      video:data.video,
      exposition:data.exposition,
      width:data.width,
      height:data.height,
      depth:data.depth,
      weight:data.weight,
      work_price:data.work_price,
      weekend_price:data.weekend_price,
      week_price:data.week_price,
      month_price:data.month_price,
      availability:data.availability,
      img1:imgS
   }
  
    const result = await db.getDb().collection('cameras').insertOne(newItem)
    console.log(result)

}  catch(error) {
   console.log(error);
 }

})



module.exports = router