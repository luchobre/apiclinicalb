import { Pacientes } from "../model/pacientes.js";

const getPaciente = async (req, res) => {
  const id = req.params.id;
  try {
    const getPaciente = await Pacientes.findByPk(id);
    console.log(getPaciente);
    getPaciente
      ? res.json(getPaciente)
      : res.json(`No se encontró el paciente con el id ${id}`);
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
};
const getPacientes = async (req, res) => {
  const getPaciente = await Pacientes.findAll();
  res.send(getPaciente);
};
const createPacientes = async (req, res) => {
  try {
    const { nombre, apellido, direccion, localidad, provincia, telefono, dni } =
      req.body;

    const nuevoPaciente = await Pacientes.create({
      nombre,
      apellido,
      direccion,
      localidad,
      provincia,
      telefono,
      dni,
    });
    console.log(nuevoPaciente);
    res.send("Paciente creado");
  } catch (error) {
    res.status(500).json({ error: "El paciente no pudo crearse" });
  }
};
const updatePacientes = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, direccion, localidad, provincia, telefono, dni } =
      req.body;
    const pacienteModif = await Pacientes.update(
      {
        nombre, apellido, direccion, localidad, provincia, telefono, dni
      },
      {
        where: { id},
      }
    )
    if (pacienteModif > 0) {
      res.json("Se modificó el paciente " + id);
    } else {
      res.json('Hubo un error y no se modificó el paciente')
    }
  } catch (error) {
    res.json(`No se encontró el paciente con el id ${id}`);
  }
};
const deletePacientes = async (req, res) => {
  const { id } = req.params;
  try {
    const deletePaciente = await Pacientes.destroy({
      where: { id },
    })
    deletePaciente
    ? res.send('El paciente ha sido eliminado')
    : res.status(404).send(`No existe un paciente con el id: ${id}`);
  } catch (error) {
    res.status(500).send(`Error del delete: ${error.message}`)
  }
};

export {
  getPaciente,
  getPacientes,
  createPacientes,
  updatePacientes,
  deletePacientes,
};
