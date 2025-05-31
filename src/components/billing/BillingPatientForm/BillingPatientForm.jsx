
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./BillingPatientForm.css";
import Loading from "../../common/Loading/Loading.jsx";

const BillingPatientForm = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        id: '',
        patientNumber: '',
        billNumber: '',
        billDate: '',
        billStatus: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
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

            navigate(`/facturacion/lista?${params.toString()}`);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <Loading/>;
    }

    return (
        <div className="billing-form-container">
            <h1>Buscar Facturación</h1>
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
                        <label htmlFor="patientNumber">Número de Paciente:</label>
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
                        <label htmlFor="billNumber">Número de Factura:</label>
                        <input
                            type="text"
                            id="billNumber"
                            name="billNumber"
                            value={formData.billNumber}
                            onChange={handleChange}
                            placeholder="Ingrese el número de factura"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="billDate">Fecha de Factura:</label>
                        <input
                            type="date"
                            id="billDate"
                            name="billDate"
                            value={formData.billDate}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="billStatus">Estado de Factura:</label>
                        <select
                            id="billStatus"
                            name="billStatus"
                            value={formData.billStatus}
                            onChange={handleChange}
                        >
                            <option value="">Seleccione un estado</option>
                            <option value="pending">Pendiente</option>
                            <option value="paid">Pagada</option>
                            <option value="cancelled">Cancelada</option>
                        </select>
                    </div>

                    <button type="submit" className="submit-button">
                        Buscar Facturación
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BillingPatientForm;