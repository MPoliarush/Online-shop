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




router.get('/products',async (req,res)=>{
   console.log('logged')
   let result;
   try{
       let resultCameras = await db.getDb().collection('cameras').find().toArray()
       let resultLinses = await db.getDb().collection('linses').find().toArray()
       result = resultCameras.concat(resultLinses)
   }  catch(error) {
      
   }

   res.send(result)
})


router.get('/cameras',async (req,res)=>{
   console.log('logged')
   let result;
   try{
       result = await db.getDb().collection('cameras').find().toArray()
      //  console.log(result)
   }  catch(error) {
      
   }

   res.send(result)
})


router.post('/cameras-filters',async (req,res)=>{
   console.log('logged Filtered')
   const filters = req.body
   console.log(filters)
   let query ={}
   // for (const key in filters){
   //    const value = filters[key]
   //    if (filters[key].length>0){
   //       query[key]= { $in:filters[key]}
   //    }
   // }
  
  
   for (const key in filters) {
      const value = filters[key]
      if (value.length > 0) {
        if (key === 'maxPrice') {
          query['work_price'] = { $lte: parseInt(value[0]).toString() }
        } else {
          query[key] = { $in: value}
        }
      }
    }

   console.log(query)

   let result;
   try{
      result = await db.getDb().collection('cameras').find(query).toArray()
      // const result = await db.getDb().collection('cameras').find( { brand:{ $in:rawData.brand}, type:{$in:rawData.type} } ).toArray()
      console.log(result)
   }  catch(error) {

   }

   res.send(result)
})

// router.get('/cameras-filters',async (req,res)=>{
  
//    let result;
//    try{
//       const result = await db.getDb().collection('cameras').find( {brand:})
//       console.log(result)
//    }  catch(error) {
//    }

//    res.send(result)
// })



router.get('/linses',async (req,res)=>{
   console.log('logged')
   let result;
   try{
       result = await db.getDb().collection('linses').find().toArray()
      //  console.log(result)
   }  catch(error) {
      
   }

   res.send(result)
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
      min_focus_length:data.min_focus_length,
      diametr:data.diametr,
      linseType:data.linseType,
      linceLength: data.linceLength,
      availability:data.availability,
      img1:imgS
   }
  
   if(newItem.typeGoods=="Фотокамера"){
      const result = await db.getDb().collection('cameras').insertOne(newItem)
      console.log(result)
   } else if (newItem.typeGoods=="Лінза"){
      const result = await db.getDb().collection('linses').insertOne(newItem)
      console.log(result)
   }

}  catch(error) {
   console.log(error);
}

})



module.exports = router