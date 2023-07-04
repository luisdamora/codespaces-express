import express, { Express, Request, Response } from 'express';
import router from './router/router';

const app: Express = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World 10!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use('/bosque', router)


export default app;