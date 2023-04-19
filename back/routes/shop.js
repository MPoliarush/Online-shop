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
      console.log(result)
   }  catch(error) {

   }

   res.send(result)
})




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




// router.post('/admin/update/:id', async (req,res)=>{
   
//    console.log(req.params.id)
//    const productId = req.params.id;
//    // const imgS = req.files
//    // console.log(imgS)
   
//    const rawData = req.body
//    // const data = JSON.parse(rawData)

// console.log(rawData)
 
// try{
//    const newItem = {
//       typeGoods:rawData.typeGoods,
//       brand: rawData.brand,
//       model: rawData.model,
//       imgdepth:rawData.imgdepth,
//       type:rawData.type,
//       matrix:rawData.matrix,
//       mpx:rawData.mpx,
//       video:rawData.video,
//       exposition:rawData.exposition,
//       width:rawData.width,
//       height:rawData.height,
//       depth:rawData.depth,
//       weight:rawData.weight,
//       work_price:rawData.work_price,
//       weekend_price:rawData.weekend_price,
//       week_price:rawData.week_price,
//       month_price:rawData.month_price,
//       min_focus_length:rawData.min_focus_length,
//       diametr:rawData.diametr,
//       linseType:rawData.linseType,
//       linceLength: rawData.linceLength,
//       availability:rawData.availability,
      
//    }
  
//    if(newItem.typeGoods=="Фотокамера"){
//       const result = await db.getDb().collection('cameras').updateOne( {_id:new ObjectId(productId)}, {$set : newItem} )
//       console.log(result)
//    } else if (newItem.typeGoods=="Лінза"){
//       const result = await db.getDb().collection('linses').updateOne( {_id: new ObjectId(productId)}, {$set :newItem} )
//       console.log(result)
//    }

// }  catch(error) {
//    console.log(error);
// }

// })


router.post('/admin/update/:id',upload.array("imgS"), async (req,res)=>{
   
   // console.log(req.params.id)
   // console.log(req.files)
   // console.log(JSON.parse(req.body.input))

   const productId = req.params.id;
   // const imgS = req.files
   // console.log(imgS)

   
   
  
try{
   if(req.files){
      const rawData = JSON.parse(req.body.input)
      let imgarray= rawData.img1
      imgarray.push(...req.files)
      console.log(imgarray)

      const newItem = {
         typeGoods:rawData.typeGoods,
         brand: rawData.brand,
         model: rawData.model,
         imgdepth:rawData.imgdepth,
         type:rawData.type,
         matrix:rawData.matrix,
         mpx:rawData.mpx,
         video:rawData.video,
         exposition:rawData.exposition,
         width:rawData.width,
         height:rawData.height,
         depth:rawData.depth,
         weight:rawData.weight,
         work_price:rawData.work_price,
         weekend_price:rawData.weekend_price,
         week_price:rawData.week_price,
         month_price:rawData.month_price,
         min_focus_length:rawData.min_focus_length,
         diametr:rawData.diametr,
         linseType:rawData.linseType,
         linceLength: rawData.linceLength,
         availability:rawData.availability,
         img1:rawData.img1
      }
      
     
      if(newItem.typeGoods=="Фотокамера"){
         const result = await db.getDb().collection('cameras').updateOne( {_id:new ObjectId(productId)}, {$set : newItem} )
         console.log(result)
      } else if (newItem.typeGoods=="Лінза"){
         const result = await db.getDb().collection('linses').updateOne( {_id: new ObjectId(productId)}, {$set :newItem} )
         console.log(result)
      }


   } else if (!req.files){

      const rawData = req.body
      
      console.log(rawData)

         const newItem = {
            typeGoods:rawData.typeGoods,
            brand: rawData.brand,
            model: rawData.model,
            imgdepth:rawData.imgdepth,
            type:rawData.type,
            matrix:rawData.matrix,
            mpx:rawData.mpx,
            video:rawData.video,
            exposition:rawData.exposition,
            width:rawData.width,
            height:rawData.height,
            depth:rawData.depth,
            weight:rawData.weight,
            work_price:rawData.work_price,
            weekend_price:rawData.weekend_price,
            week_price:rawData.week_price,
            month_price:rawData.month_price,
            min_focus_length:rawData.min_focus_length,
            diametr:rawData.diametr,
            linseType:rawData.linseType,
            linceLength: rawData.linceLength,
            availability:rawData.availability,
            img1:rawData.img1
         }
         
      
         if(newItem.typeGoods=="Фотокамера"){
            const result = await db.getDb().collection('cameras').updateOne( {_id:new ObjectId(productId)}, {$set : newItem} )
            console.log(result)
         } else if (newItem.typeGoods=="Лінза"){
            const result = await db.getDb().collection('linses').updateOne( {_id: new ObjectId(productId)}, {$set :newItem} )
            console.log(result)
         }


   }

}  catch(error) {
      console.log(error);
}

  

})




module.exports = router