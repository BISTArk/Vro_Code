const express = require("express");

const app = express();

app.use(express.static('client'));


const port = process.env.PORT || 3004;
app.listen(port,()=>{
    console.log(`Server listening at port ${port}`)
})