const express = requier("express");
const app = express()
const port = process.env.PORT;



app.listen(port,()=>{
    console.log(`app listen on the port ${port}`)
})