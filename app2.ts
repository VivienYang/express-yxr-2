import express, { ErrorRequestHandler } from 'express';
// 源码里说应该用 import * as express from "express";
// 但是使用后报错，所以就改了，不用太纠结到底用哪个，哪个能用就用哪个
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.use((req, res, next) => {
  res.write('111\n')
  next()
});
app.use((req, res, next) => {
  res.write('222\n')
  next()
});
app.use('/xxx', (req, res, next) => {
  next('未登录');
});
app.use((req, res, next) => {
  res.write('333\n')
  res.end()
});
let total = 0
app.use(function(err,req,res,next){
  total++
  res.write(`Error数目：${total.toString()} \n`)
  next(err)
} as ErrorRequestHandler)
app.use(function(err,req,res,next){
  res.write(err+'\n')
  res.end()
} as ErrorRequestHandler)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
