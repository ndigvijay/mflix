const express=require("express")
const app =express()
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const routes=require("./routes/routes")
const cors=require('cors')


dotenv.config()
const mongoURI = process.env.DATABASE_URL;



try {
  mongoose.connect(mongoURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  });
  console.log("MongoDB connected successfully");
} catch (error) {
  console.error("Error connecting to MongoDB:",error);
}


app.use(express.json()) //built in body parser
app.use(cors())
app.use("/app",routes)


app.listen(4000,()=>console.log("server is running"))