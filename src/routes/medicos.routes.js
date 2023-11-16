import { Router } from 'express'
import { createMedicos, getMedicos, updateMedicos, deleteMedicos, getMedico } from '../controllers/medicos.controllers.js'

const router = Router();

router.get('/medicos', getMedicos)
router.post('/medicos', createMedicos)
router.put('/medicos/:id', updateMedicos)
router.delete('/medicos/:id', deleteMedicos)
router.get('/medicos/:id', getMedico)

export default router;