
const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());
const port = 5000;

app.use(express.json());

app.post('/api/details' , (req, res)=>{
  const details = req.body;
  console.log(details);
  res.json({message: 'Data received'});
})

app.listen(port, ()=>{
  console.log(`server is running on port ${port}`);
})


