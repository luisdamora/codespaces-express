import { Router, Request, Response } from 'express'

const router = Router()

router.get('/arbol', (req: Request, res: Response) => {
    res.status(201).send('arbol')
})

export default router