import { useState } from 'react';
import PropTypes from 'prop-types';
import './AppointmentModal.css';

const AppointmentModal = ({ isOpen, onClose, onSubmit, professionals }) => {
    const [appointmentData, setAppointmentData] = useState({
        patientName: '',
        professional: '',
        date: '',
        time: '',
        duration: '30',
        notes: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(appointmentData);
        onClose();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAppointmentData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Nuevo Turno</h2>
                <form onSubmit={handleSubmit} className="DONT-USE-OTHER-FORM-STYLE-PLZ-THANKYOU">
                    <div className="modal-form-group">
                        <label htmlFor="patientName">Nombre del Paciente</label>
                        <input
                            type="text"
                            id="patientName"
                            name="patientName"
                            value={appointmentData.patientName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="modal-form-group">
                        <label htmlFor="professional">Profesional</label>
                        <select
                            id="professional"
                            name="professional"
                            value={appointmentData.professional}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Seleccionar Profesional</option>
                            {professionals.map(prof => (
                                <option key={prof.id} value={prof.id}>
                                    {prof.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="modal-form-row">
                        <div className="modal-form-group">
                            <label htmlFor="date">Fecha</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={appointmentData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="modal-form-group">
                            <label htmlFor="time">Hora</label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                value={appointmentData.time}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="modal-form-group">
                        <label htmlFor="duration">Duración (minutos)</label>
                        <select
                            id="duration"
                            name="duration"
                            value={appointmentData.duration}
                            onChange={handleChange}
                        >
                            <option value="15">15 minutos</option>
                            <option value="30">30 minutos</option>
                            <option value="45">45 minutos</option>
                            <option value="60">1 hora</option>
                        </select>
                    </div>

                    <div className="modal-form-group">
                        <label htmlFor="notes">Notas</label>
                        <textarea
                            id="notes"
                            name="notes"
                            value={appointmentData.notes}
                            onChange={handleChange}
                            rows="3"
                        />
                    </div>

                    <div className="modal-actions">
                        <button type="submit" className="submit-btn">
                            Guardar Turno
                        </button>
                        <button type="button" onClick={onClose} className="cancel-btn">
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

AppointmentModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    professionals: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};

export default AppointmentModal;