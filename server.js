const express = require('express');
const cors= require('cors');
const PORT = process.env.PORT || 9000;
const path= require('path');

const app= express();
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'client', 'dist')));

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
    resp.send(path.resolve(__dirname, 'client', 'dist', 'index/html'));
});

app.listen(PORT,() =>{
    console.log('server running at localhost:',PORT);
});

