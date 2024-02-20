const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

//path to json file
const dataPath = path.join(__dirname,'..','data', 'items.json');

getData = ()=>{
    const jsonData = fs.readFileSync(dataPath);
    return JSON.parse(jsonData);
}

saveData = (data)=>{
    const stringifyData = JSON.stringify(data,null,2);
    fs.writeFileSync(dataPath, stringifyData); 
}

router.get('/', (req,res)=>{
  const data = getData();
  res.send(data);
});

router.post('/',(req,res)=>{
  const data = getData();
  const newItem = req.body;
  newItem.id = data.items.length + 1;
  data.items.push(newItem);
  saveData(data);
  res.status(201).send(newItem);
});





module.exports = router;
