const express = require('express');
const PORT = process.env.PORT || 9000;
const app= express();


app.get('*', (req,resp)=>{
    resp.send('<h1>Awesome App Working!</h1>');
});

app.listen(PORT,() =>{
    console.log('server running at localhost:',PORT);
});

