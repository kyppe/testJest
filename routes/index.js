import express from 'express';

const router = express.Router();
router.post('/register', (req, res, next) => {
  if (!req.body.firstName) {
    res.status(400).json('you need to pass a firstName');
    return;
  }
  res.sendStatus(201);
});
router.get("/",(req,res)=>{
  console.log("aaa");
  res.send("hola")
  res.sendStatus(200);



})

export default  router;
