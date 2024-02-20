const express = require('express');
const itemRoutes = require('./routes/items');
const app = express();
const port = 3000;

//middleware to parse JSON bodies
app.use(express.json());

app.use('/api/items',itemRoutes);

app.listen(port, ()=>{
  console.log('Server is running');
});

