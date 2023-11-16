import { Router } from 'express'
import { createTurnos, getTurnos, updateTurnos, deleteTurnos, getTurno } from '../controllers/turnos.controllers.js'

const router = Router();

router.get('/turnos/:id', getTurno)
router.get('/turnos', getTurnos)
router.post('/turnos', createTurnos)
router.put('/turnos/:id', updateTurnos)
router.delete('/turnos/:id', deleteTurnos)

export default router;