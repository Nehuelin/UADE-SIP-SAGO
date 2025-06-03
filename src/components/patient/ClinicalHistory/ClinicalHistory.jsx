
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './ClinicalHistory.css';
import { getPatient, getPatientClinicalHistory } from '../../../helpers/dbSimulator';
import Loading from '../../common/Loading/Loading';

const ClinicalHistory = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [patient, setPatient] = useState(null);
    const [clinicalHistory, setClinicalHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [patientData, historyData] = await Promise.all([
                    getPatient(id),
                    getPatientClinicalHistory(id)
                ]);
                setPatient(patientData);
                setClinicalHistory(historyData);
            } catch (error) {
                setError("Error al cargar los datos del paciente");
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchData();
        }
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    if (error || !patient) {
        return <div className="error-message">Error: {error || "Paciente no encontrado"}</div>;
    }

    return (
        <div className="clinical-history-container">
            <header className="header">
                <button onClick={() => navigate(-1)} className="back-button">←</button>
                <h2>Historia Clínica</h2>
            </header>

            <div className="content">
                <div className="patient-summary">
                    <div className="patient-image">
                        <img src={patient.photo || '/default-avatar.png'} alt="Paciente" />
                    </div>
                    <div className="patient-info">
                        <h3>{`${patient.name} ${patient.surname}`}</h3>
                        <p><strong>DNI:</strong> {patient.dni}</p>
                        <p><strong>Edad:</strong> {patient.age} años</p>
                        <p><strong>Obra Social:</strong> {patient.healthInsurance}</p>
                    </div>
                    <div className="medical-alerts">
                        <div className="alert-section">
                            <h4>Alergias</h4>
                            <p className={patient.allergies === "Ninguna" ? "no-alerts" : "has-alerts"}>
                                {patient.allergies}
                            </p>
                        </div>
                        <div className="alert-section">
                            <h4>Medicación Actual</h4>
                            <p className={patient.medications === "Ninguna" ? "no-alerts" : "has-alerts"}>
                                {patient.medications}
                            </p>
                        </div>
                        <div className="alert-section">
                            <h4>Enfermedades Crónicas</h4>
                            <p className={patient.chronicDiseases === "Ninguna" ? "no-alerts" : "has-alerts"}>
                                {patient.chronicDiseases}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="history-records">
                    <h3>Registros Clínicos</h3>
                    {clinicalHistory.length === 0 ? (
                        <p className="no-records">No hay registros clínicos disponibles</p>
                    ) : (
                        clinicalHistory.map((record) => (
                            <div key={record.id} className="history-record">
                                <div className="record-header">
                                    <span className="record-date">{record.date}</span>
                                    <span className="record-id">ID: {record.id}</span>
                                </div>
                                <div className="record-content">
                                    <p><strong>Diagnóstico:</strong> {record.diagnosis}</p>
                                    <p><strong>Tratamiento:</strong> {record.treatment}</p>
                                    <p><strong>Notas:</strong> {record.notes}</p>
                                    <p className="doctor-id"><strong>Doctor:</strong> {record.doctorId}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div className="clinic-actions">
                <button onClick={() => navigate(`/agregar-registro/${id}`)}>
                    Nuevo Registro Clínico
                </button>
                <button onClick={() => navigate('/menu-principal')}>
                    Volver al Menú
                </button>
            </div>
        </div>
    );
};

export default ClinicalHistory;