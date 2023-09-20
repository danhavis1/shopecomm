import express from 'express'
import {
  getAllCategories,
  sendCategoriesToDB,
} from '../controllers/category.js'

const router = express.Router()

router.post('/sendcategories', sendCategoriesToDB)

router.get('/', getAllCategories)

export default router
