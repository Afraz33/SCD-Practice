import express from 'express';

const app = express();

app.get('/',function(req, res){
res.send('I am Afraz')
})

app.listen(3000, () => 
  console.log("Server is running on port 3000")
)