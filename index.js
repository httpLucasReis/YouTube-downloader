const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();


// middleware for receive requests.
app.use(cors());

// Routes
app.get('/download', (req,res)=>{
    var URL = req.query.URL;

    res.header('Content-Disposition', 'attachment; filename="music.mp3"');
    
    ytdl(URL, {
        format: 'mp3'
    }).pipe(res);

});


// Running server
app.listen(8080, ()=>{
    console.log('Servers works !!! at port 8080');
})

