import 'dotenv/config';
import cors from 'cors'
import express from 'express'

import routes from './routes'

const app = express()

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', routes.products)

app.listen(3000, () => {
    console.log(`App listening on port ${process.env.PORT}.`)
})
