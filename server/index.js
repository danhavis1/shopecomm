import { config } from 'dotenv'
import express, { json } from 'express'
import cors from 'cors'
import { connectToDB } from './config/mongoDb.js'
import authRoutes from './routes/auth.js'
import productRoutes from './routes/product.js'
import categoryRoutes from './routes/category.js'
import orderRoutes from './routes/order.js'

const app = express() //initialize express
config()
app.use(json()) //parse requests to json format
app.use(cors()) //cross-origin requests
app.disable('x-powered-by')

//api endpoints
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/products', productRoutes)
app.use('/api/v1/categories', categoryRoutes)
app.use('/api/v1/orders', orderRoutes)

app.use((err, req, res) => {
  const status = err.status || 500
  const message = err.message || 'Something went wrong'
  return res.status(status).json({
    success: false,
    status,
    message,
  })
})

const PORT = process.env.PORT || 8000 //default host port or local port

connectToDB()
  .then(() => {
    try {
      app.listen(PORT, () => {
        console.log(`Server connected to port ${PORT}`)
      })
    } catch (error) {
      console.log('Could not connect to server')
    }
  })
  .catch((error) => {
    console.log('Invalid database connection')
  })
