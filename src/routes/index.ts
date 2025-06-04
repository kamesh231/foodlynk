import { Router } from 'express'

const router = Router()

router.get('/hello', (req, res) => {
  const tenant = req.tenant?.tenant || 'unknown'
  res.json({ tenant, message: 'Welcome to FoodLynk' })
})

export default router
