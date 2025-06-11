import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../common/Loading/Loading';
import "./PatientFindForm.css";

const PatientFindForm = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        id: '',
        patientNumber: '',
        phoneNumber: '',
        healthInsurance: '',
        healthInsuranceNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!Object.values(formData).some(value => value.trim())) {
            setError('Por favor, complete al menos un campo para realizar la búsqueda');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            const params = new URLSearchParams();
            Object.entries(formData).forEach(([key, value]) => {
                if (value.trim()) {
                    params.append(key, value.trim());
                }
            });

            navigate(`/buscar-pacientes/lista?${params.toString()}`);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };


    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="patient-form-container">
            <h1>Buscar Paciente</h1>
            <p>Los campos no son obligatorios. Úselos para filtrar la búsqueda.</p>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-fields-container">
                    <div className="form-group">
                        <label htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ingrese el nombre del paciente"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="surname">Apellido:</label>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                            placeholder="Ingrese el apellido del paciente"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="id">DNI:</label>
                        <input
                            type="text"
                            id="id"
                            name="id"
                            value={formData.id}
                            onChange={handleChange}
                            placeholder="Ingrese el DNI del paciente"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="patientNumber">Numero de Paciente:</label>
                        <input
                            type="text"
                            id="patientNumber"
                            name="patientNumber"
                            value={formData.patientNumber}
                            onChange={handleChange}
                            placeholder="Ingrese el número de paciente"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phoneNumber">Numero de Telefono:</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Ingrese el número de teléfono"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="healthInsurance">Obra Social:</label>
                        <input
                            type="text"
                            id="healthInsurance"
                            name="healthInsurance"
                            value={formData.healthInsurance}
                            onChange={handleChange}
                            placeholder="Ingrese la obra social"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="healthInsuranceNumber">Numero Obra Social:</label>
                        <input
                            type="text"
                            id="healthInsuranceNumber"
                            name="healthInsuranceNumber"
                            value={formData.healthInsuranceNumber}
                            onChange={handleChange}
                            placeholder="Ingrese el número de obra social"
                        />
                    </div>

                    <button type="submit" className="submit-button">
                        Buscar Paciente
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PatientFindForm;