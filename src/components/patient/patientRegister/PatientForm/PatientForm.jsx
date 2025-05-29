import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { simulateAuth } from '../../../../helpers/authSimulator.js';
import Loading from '../../../common/Loading/Loading.jsx';
import SuccessScreen from "../SuccessScreen/SuccessScreen.jsx";
import './PatientForm.css';

const PatientForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        id: '',
        patientNumber: '',
        phoneNumber: '',
        servingDoctor: '',
        healthInsurance: '',
        healthInsuranceNumber: '',
        observations: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');


        try {
            await simulateAuth();
            // USAR FUNCION PARA AGREGAR A DB
            setIsSuccess(true);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
            console.log('Form submitted:', formData);
        }
    };

    const handleAddAnother = () => {
        setFormData({
            name: '',
            surname: '',
            id: '',
            patientNumber: '',
            phoneNumber: '',
            servingDoctor: '',
            healthInsurance: '',
            healthInsuranceNumber: '',
            observations: ''
        });
        setIsSuccess(false);
    };

    const handleReturnToMenu = () => {
        navigate('/menu-principal');
    };

    if (isLoading) {
        return <Loading />;
    }

    if (isSuccess) {
        return (
            <SuccessScreen
                onAddAnother={handleAddAnother}
                onReturnToMenu={handleReturnToMenu}
            />
        );
    }

    return (
        <div className="patient-form-container">
            <h1>Registrar Paciente</h1>
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
                            required
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
                            required
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
                        required
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
                            required
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
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="servingDoctor">Doctor:</label>
                        <input
                            type="text"
                            id="servingDoctor"
                            name="servingDoctor"
                            value={formData.servingDoctor}
                            onChange={handleChange}
                            required
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
                            required
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
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="observations">Observaciones:</label>
                        <textarea
                            id="observations"
                            name="observations"
                            value={formData.observations}
                            onChange={handleChange}
                            rows="4"
                        />
                    </div>

                    <button type="submit" className="submit-button">
                        Registrar Paciente
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PatientForm;