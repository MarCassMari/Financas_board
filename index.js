import dotenv from 'dotenv'
import express from 'express'
import { CreateUserController } from './src/controllers/create-user.js'
dotenv.config()

const app = express()
app.use(express.json())
app.post('/api/users', async (req, res) => {
    const createUserController = new CreateUserController()

    const { statusCode, body } = await createUserController.execute(req)
    res.status(statusCode).send(body)
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
