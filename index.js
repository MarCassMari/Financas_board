import dotenv from 'dotenv'
import express from 'express'
dotenv.config()
import { PostgresHelper } from './src/db/postgres/helper.js'

const app = express()

app.get('/', async (req, res) => {
    const result = await PostgresHelper.query('SELECT NOW()')
    return res.send(JSON.stringify(result.rows))
})
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
