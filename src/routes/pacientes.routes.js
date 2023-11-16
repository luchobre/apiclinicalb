import { Router } from 'express'
import { createPacientes, getPacientes, updatePacientes, deletePacientes, getPaciente } from '../controllers/pacientes.controllers.js'

const router = Router();

router.get('/pacientes/:id', getPaciente)
router.get('/pacientes', getPacientes)
router.post('/pacientes', createPacientes)
router.put('/pacientes/:id', updatePacientes)
router.delete('/pacientes/:id', deletePacientes)

export default router;