import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PatientRecord.css';
import { useNavigate } from 'react-router-dom';
import { getPatient } from '../../../helpers/dbSimulator';

const PatientRecord = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [patient, setPatient] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const patientData = await getPatient(id);
                setPatient(patientData);
            } catch (error) {
                console.error("Error fetching patient data:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchPatient();
        }
    }, [id]);

    const handleNavigation = (path) => {
        navigate(path);
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (!patient) {
        return <div>Paciente no encontrado</div>;
    }

    return (
        <div className="clinical-history-container">
            <header className="header">
                <button onClick={() => navigate(-1)} className="back-button">←</button>
                <h2>FICHA DE PACIENTE</h2>
            </header>

            <div className="content">
                <div className="patient-image">
                    <img src={patient.photo || '/default-avatar.png'} alt="Paciente" />
                </div>

                <div className="data-sections">
                    <section className="section">
                        <h3>Datos Personales</h3>
                        <p><strong>Nombre Completo:</strong> {patient.name}</p>
                        <p><strong>DNI / CUIL / Pasaporte:</strong> {patient.id}</p>
                        <p><strong>Fecha de Nacimiento:</strong> {patient.birthDate}</p>
                        <p><strong>Edad:</strong> {patient.age}</p>
                        <p><strong>Género:</strong> {patient.gender}</p>
                        <p><strong>Estado Civil:</strong> {patient.maritalStatus}</p>
                        <p><strong>Nacionalidad:</strong> {patient.nationality}</p>
                        <p><strong>Domicilio:</strong> {patient.address}</p>
                        <p><strong>Teléfono:</strong> {patient.phone}</p>
                        <p><strong>Email:</strong> {patient.email}</p>
                    </section>

                    <section className="section">
                        <h3>Datos Médicos</h3>
                        <p><strong>Alergias Conocidas:</strong> {patient.allergies}</p>
                        <p><strong>Enfermedades Crónicas:</strong> {patient.chronicDiseases}</p>
                        <p><strong>Medicación habitual:</strong> {patient.medications}</p>
                        <p><strong>Grupo Sanguíneo:</strong> {patient.bloodType}</p>
                        <p><strong>Observaciones:</strong> {patient.observations}</p>
                    </section>

                    <section className="section">
                        <h3>Datos Administrativos</h3>
                        <p><strong>Obra Social:</strong> {patient.healthPlan}</p>
                        <p><strong>Número de Afiliado:</strong> {patient.healthPlanNumber}</p>
                        <p><strong>Plan / Cobertura:</strong> {patient.coverage}</p>
                        <p><strong>Fecha de Alta:</strong> {patient.admissionDate}</p>
                    </section>
                </div>
            </div>

            <div className="actions">
                <button onClick={() => handleNavigation(`/historial-clinico/${patient.id}`)}>Ver Historial Clínico</button>
                <button onClick={() => handleNavigation(`/caja/${patient.id}`)}>Caja</button>
                <button onClick={() => handleNavigation(`/tratamiento/${patient.id}`)}>Agregar Tratamiento</button>
                <button onClick={() => handleNavigation(`/animo/${patient.id}`)}>Ver Ánimo</button>
                <button onClick={() => navigate('/menu-principal')}>Volver al Menú</button>
            </div>

            <footer>
                <p>Última actualización: {patient.lastUpdate}</p>
            </footer>
        </div>
    );
};

export default PatientRecord;