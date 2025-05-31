
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Loading from '../../../common/Loading/Loading';
import { searchPatients } from '../../../../helpers/dbSimulator.js';
import './PatientList.css';

const PatientList = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [filteredPatients, setFilteredPatients] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPatients = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const searchParams = new URLSearchParams(location.search);
                const filters = Object.fromEntries(searchParams.entries());
                const results = await searchPatients(filters);
                setFilteredPatients(results);
            } catch (err) {
                setError('Error al buscar pacientes: ' + err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPatients();
    }, [location.search]);

    const handleViewHistory = (patientId) => {
        navigate(`/ficha-paciente/${patientId}`);
    };

    if (isLoading) return <Loading />;
    if (error) return <div className="error-message">{error}</div>;

    return (
        <div className="patient-list-container">
            <h1>Lista de Pacientes</h1>

            {filteredPatients.length === 0 ? (
                <div className="no-results">
                    No se encontraron pacientes con los criterios de búsqueda especificados.
                </div>
            ) : (
                <div className="patient-list-table">
                    <div className="table-header">
                        <div className="header-cell">Nombre Completo</div>
                        <div className="header-cell">Obra Social</div>
                        <div className="header-cell">Acciones</div>
                    </div>

                    {filteredPatients.map(patient => (
                        <div key={patient.id} className="table-row">
                            <div className="table-cell name-cell">
                                {`${patient.name} ${patient.surname}`}
                                <div className="patient-details">
                                    <span>DNI: {patient.dni}</span>
                                    <span>N° Paciente: {patient.patientNumber}</span>
                                    <span>Tel: {patient.phoneNumber}</span>
                                </div>
                            </div>
                            <div className="table-cell">
                                <div className="insurance-info">
                                    <span className="insurance-name">{patient.healthInsurance}</span>
                                    <span className="insurance-number">N°: {patient.healthInsuranceNumber}</span>
                                </div>
                            </div>
                            <div className="table-cell action-cell">
                                <button
                                    className="history-button"
                                    onClick={() => handleViewHistory(patient.id)}
                                >
                                    Ver Historia Clínica
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )};

export default PatientList;
