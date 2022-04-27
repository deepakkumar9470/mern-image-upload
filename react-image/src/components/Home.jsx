import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Home = () => {
 
  const[title, setTitle] = useState('')
  const[desc, setDesc] = useState('')
  const[file, setFile] = useState('')


  const handleSubmit = async (e) =>{
      e.preventDefault()
      const formData  = new FormData()
      formData.append('title', title)
      formData.append('desc', desc)
      formData.append('photo', file)
      console.log('Photo hai', file)
      console.log(e)



       try {
         const res = await axios.post('http://localhost:5000/api/user/add', formData)
         console.log('Data submitted from frontend..', res)
       } catch (error) {
         console.log(error)
       }
  
  
  }
  return (
    <div className="form_div">
        <h2>MERN ImageUpload</h2>
         <form onSubmit={handleSubmit} encType="multipart/form-data">
             <input 
                type="text" 
                name="title"
                value={title} 
                onChange={(e)=>setTitle(e.target.value)}
                placeholder="Enter title.."/>
             <input 
                type="text" 
                name="desc"
                value={desc} 
                onChange={(e)=>setDesc(e.target.value)}
                placeholder="Enter desc.."/>
             <input 
                type="file"
                onChange={(e)=>setFile(e.target.files[0])}
                
                name="photo"/>
             <button type='submit'>Add</button>
         </form>
    </div>
  )
}

export default Home