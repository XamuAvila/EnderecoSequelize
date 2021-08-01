const express = require('express')
const app = express()
const router = require('./api/routes/index')
router(app);

app.listen(3000,()=>{
    console.log('Server on')
})