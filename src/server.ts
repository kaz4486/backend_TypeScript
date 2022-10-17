import express from 'express';
import productsRouters from './routes/products.routes';
import usersRouters from './routes/users.routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

app.use('/api/products', productsRouters);
app.use('/api/users', usersRouters);

