const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

exports.agregarPaciente = functions.https.onRequest(async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).send("Método no permitido");
    }

    const {
        nombre,
        apellido,
        dni,
        nroPaciente,
        telefono,
        doctor,
        obraSocial,
        nroObraSocial,
        observaciones
    } = req.body;

    if (!nombre || !apellido || !dni || !nroPaciente || !telefono || !doctor || !obraSocial || !nroObraSocial) {
        return res.status(400).send("Faltan campos obligatorios");
    }

    const paciente = {
        nombre,
        apellido,
        dni,
        nroPaciente,
        telefono,
        doctor,
        obraSocial,
        nroObraSocial,
        observaciones: observaciones || ""
    };

    try {
        await db.collection("pacientes").doc(dni).set(paciente);
        res.status(200).send("Paciente agregado correctamente");
    } catch (error) {
        console.error("Error al guardar paciente:", error);
        res.status(500).send("Error interno del servidor");
    }
});
