import express from 'express'
import { verifyToken } from '../middlewares/verifyToken.js'
import { createOrder, getAllOrders, getOrderDetail, getUserOrders, trackOrders } from '../controllers/order.js'

const router = express.Router()

//post
router.post('/create', verifyToken, createOrder)

//get
router.get('/user', verifyToken, getUserOrders)
router.get('/', verifyToken, getAllOrders)
router.get('/:id', verifyToken, getOrderDetail)

//put
router.put('/:id/tracking', verifyToken, trackOrders)

export default router