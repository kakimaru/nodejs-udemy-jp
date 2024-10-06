import express from 'express'


const router = express.Router()

const products = [
  { name: "table", price: 1000 },
  { name: "chair", price: 100 },
  { name: "clock", price: 700 },
];


router.get('/products', function (req, res) {
  res.json(products);
});

router.get('/products/:id', function (req, res) {
  const targetId = req.params.id
  res.json(products[targetId]);
});

router.post('/product', function (req, res) {
  const newProduct = req.body;
  products.push(newProduct)
  console.log(products)
  res.json(newProduct);
});

router.post('/products/:id', function (req, res) {
  const deleteId = req.params.id;
  products.splice(deleteId, 1)
  console.log(products)
  res.json({deleteId});
});

router.patch('/products/:id', function (req, res) {
  const targetProduct = products[req.params.id];
  if(req.body.hasOwnProperty('price')) {
    targetProduct.price = req.body.price;
  }
  if(req.body.hasOwnProperty('name')) {
    targetProduct.name = req.body.name;
  }
  res.json(targetProduct);
});

router.listen(PORT, function () {
  console.log(`Server start: http://localhost:${PORT}`);
});

export default router