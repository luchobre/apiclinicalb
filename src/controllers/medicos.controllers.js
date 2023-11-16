import { Medicos } from "../model/medicos.js";

const getMedico = async (req, res) => {
  const id = req.params.id;
  try {
    const getMedico = await Medicos.findByPk(id);
    console.log(getMedico);
    getMedico
      ? res.json(getMedico)
      : res.json(`No se encontró el medico con el id ${id}`);
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
};
const getMedicos = async (req, res) => {
  const getMedico = await Medicos.findAll();
  res.send(getMedico);
};
const createMedicos = async (req, res) => {
  try {
    const {
      nombre,
      apellido,
      direccion,
      localidad,
      provincia,
      telefono,
      dni,
      fechaNacimiento,
      matricula,
      especialidad,
      fechaIngreso,
    } = req.body;

    const nuevoMedico = await Medicos.create({
      nombre,
      apellido,
      direccion,
      localidad,
      provincia,
      telefono,
      dni,
      fechaNacimiento,
      matricula,
      especialidad,
      fechaIngreso,
    });
    console.log(nuevoMedico);
    res.send("Médico creado");
  } catch (error) {
    res.status(500).json({ error: "El médico no pudo crearse" });
  }
};
const updateMedicos = async (req, res) => {
  try {
    const { id } = req.params
    const {
      nombre,
      apellido,
      direccion,
      localidad,
      provincia,
      telefono,
      dni,
      fechaNacimiento,
      matricula,
      especialidad,
      fechaIngreso,
    } = req.body;
    const medicoModif = await Medicos.update(
      {
        nombre,
      apellido,
      direccion,
      localidad,
      provincia,
      telefono,
      dni,
      fechaNacimiento,
      matricula,
      especialidad,
      fechaIngreso,
      },
      {
        where:{id}
      }
    );
    if (medicoModif > 0) {
      res.json("Se modificó el médico " + id);
    } else {
      res.json(`No se encontró el médico con el id ${id}`);
    }
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};
const deleteMedicos = async(req, res) => {
  const { id } = req.params;
  try {
    const deleteMedico = await Medicos.destroy({
      where: { id },
    })
    deleteMedico
    ? res.send('El médico ha sido eliminado')
    : res.status(404).send(`No existe un médico con el id: ${id}`);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`)
  }
};

export { getMedico, getMedicos, createMedicos, updateMedicos, deleteMedicos };
