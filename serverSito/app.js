const express = require('express');
const path = require('path');
const http = require('http');
const app= express();

var cors = require('cors'); 

app.use(cors()); 


app.use(express.static(path.join(__dirname, 'dist')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html')); //__dirname : Ritorna la cartella del progetto
});

app.get('/api/products',function(req,res){
 res.sendFile(path.join(__dirname, 'products.json')); //__dirname : Ritorna la cartella del progetto
});


const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port,  () => {console.log('Example app listening on port 3000!');});
