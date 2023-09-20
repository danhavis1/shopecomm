import express from 'express'
import {
  sendProductsToDB,
  getProductsByCondition,
  getAllProducts,
  getProductsByCategory,
  getOneProduct,
  searchProducts,
  likeProduct,
  dislikeProduct,
  getIsFeaturedProducts,
  getSavedProducts,
  deleteProduct,
  createNewProduct,
} from '../controllers/product.js'
import { verifyToken } from '../middlewares/verifyToken.js'

const router = express.Router()

//post
router.post('/sendproducts', sendProductsToDB)

//get
router.get('/condition', getProductsByCondition)
router.get('/', getAllProducts)
router.get('/:categoryName', getProductsByCategory)
router.get('/title/:slugTitle', getOneProduct)
router.get('/search/product', searchProducts)
router.get('/featured/product', getIsFeaturedProducts)
router.get('/usersaved/:username', verifyToken, getSavedProducts)
//put
router.put('/:productId/like', verifyToken, likeProduct)
router.put('/:productId/dislike', verifyToken, dislikeProduct)

//delete
router.delete('/delete/:id', verifyToken, deleteProduct)
//create
router.post('/create', verifyToken, createNewProduct)

export default router
