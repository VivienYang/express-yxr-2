const express = require('express');
const logger = require('./logger')
const app = express()
app.use(logger('dev'))
app.use((req,res,next)=>{
  res.write('2')
  next()
})
app.use((req,res,next)=>{
  res.write('3')
  res.end()
})
app.listen(3000,()=>{
  console.log('正在监听3000端口')
})