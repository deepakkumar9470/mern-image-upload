import express from "express";
import multer from "multer";
const router = express.Router()

import UserModel from '../model/User.js'

import path from 'path'


const storage = multer.diskStorage({
   destination : (req,file,cb) =>{
      cb(null, "./uploads/")
   },

   
   filename : (req,file,cb) =>{
      cb(null, new Date().toISOString() + file.originalname)
   }
})


const fileFilter = (req,file,cb) =>{
   const allowedFiles=  ['image/jpeg', 'image/png', 'image/jpg']
   if(allowedFiles.includes(file.mimetype)){
      cb(null, true);
   }else{
      cb(null, false)
   }
}

const upload = multer({storage, fileFilter})

// @ http://localhost:5000/api/user/add
router.post('/add',upload.single('photo'), async(req,res)=>{
   try {
      const res = new UserModel({
         title : req.body.title,
         desc : req.body.desc,
         photo : req.file.photo,
      })

      const data =  await res.save()
      res.status(201).json({'msg' : 'User added successfully', 'data':  data})
   } catch (error) {
      console.log(error)
   }
   
})

// router.route('/add').post(upload.single('photo'), (req, res) => {
//    const title = req.body.title;
//    const desc = req.body.desc;
//    const photo = req.file.fieldname;
//    console.log(req.file)

//    const newUserData = {
//        title,
//        desc,
//        photo
//    }

//    const newUser = new User(newUserData);

//    newUser.save()
//           .then(() => res.json('User Added'))
//           .catch(err => res.status(400).json('Error: ' + err));
// });

// http://localhost:5000/api/user/get
router.get('/get',  async (req,res)=>{
   try {
      const res = await UserModel.find({})
      res.status(200).json({'msg' : 'User fetched success', 'data':  data})
   } catch (error) {
      
   }
})


export default router