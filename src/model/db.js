const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000

// 连接MongoDB数据库
mongoose.connect('mongodb://localhost/admin', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err))

// 定义item模型
const Item = mongoose.model('Item', {
  name: String,
  price: String,
  id:Number
})

app.use(bodyParser.json())
app.use(cors())

// 获取所有items信息


app.get('/items', async (req, res) => {
  const items = await Item.find().exec()
/*   const a={
    'name':1,'price':1
  } */
  res.json(items)
  
})

// 添加新的item
app.post('/items', async (req, res) => {
  const newItem = new Item(req.body)
  const savedItem = await newItem.save()
  res.json(savedItem)
})

// 删除item
app.delete('/items/:id', async (req, res) => {
  const deletedItem = await Item.findByIdAndDelete(req.params.id).exec()
  res.json(deletedItem)
})

// 更新item
app.put('/items/:id', async (req, res) => {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec()
  res.json(updatedItem)
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
