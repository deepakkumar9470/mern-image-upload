import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
const PORT = process.env.PORT || 8000
import userRoute from './routes/user.js'
import connectToDB from './db/db.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:  true}))





app.use('/api/user', userRoute)


connectToDB()



app.get('/', (req,res)=>{
    res.send('Success..')
})

app.listen(PORT, ()=>{
    console.log(`Server started at port http://localhost:${PORT}`)
})

