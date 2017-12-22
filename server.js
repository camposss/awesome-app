const express = require('express');
const cors= require('cors');
const PORT = process.env.PORT || 9000;

const app= express();
app.use(cors());

app.get('/api/get-stuff', (req,resp)=>{
    const stuff= {
        name: 'Stuffins',
        message: 'Here is some stuff'
    };
    resp.send(stuff);
});

app.get('/api/better-stuff', (req,resp)=>{
   const betterStuff= {
       name: 'Better Stuff',
       message: 'For real it/s better'
   } ;
   resp.send(betterStuff);
});


app.get('*', (req,resp)=>{
    resp.send('<h1>Awesome App Working!</h1>');
});

app.listen(PORT,() =>{
    console.log('server running at localhost:',PORT);
});

