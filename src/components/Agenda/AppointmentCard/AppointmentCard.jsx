import PropTypes from 'prop-types'; // para ver mas facil los errores con props
import './AppointmentCard.css';

const AppointmentCard = ({ appointment }) => {
    const handleSeeMore = () => {
        console.log('See more info for appointment:', appointment.id);
    };

    const handleEdit = () => {
        console.log('Edit appointment:', appointment.id);
    };

    const handleCancel = () => {
        console.log('Cancel appointment:', appointment.id);
    };

    return (
        <div className="appointment-card">
            <div className="appointment-header">
                <h3 className="appointment-time">{appointment.hour}</h3>
                <span className={`appointment-status status-${appointment.state}`}>
                    {appointment.state}
                </span>
            </div>

            <div className="patient-info">
                <p className="patient-name">
                    <strong>Paciente: </strong>
                    {appointment.patient.name}
                </p>
            </div>

            <div className="actions">
                <button
                    onClick={handleSeeMore}
                    className="action-button see-more-btn"
                >
                    Ver más
                </button>
                <button
                    onClick={handleEdit}
                    className="action-button edit-btn"
                >
                    Editar
                </button>
                <button
                    onClick={handleCancel}
                    className="action-button cancel-btn"
                >
                    Cancelar
                </button>
            </div>
        </div>
    );
};

AppointmentCard.propTypes = {
    appointment: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        hour: PropTypes.string.isRequired,
        patient: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired,
        state: PropTypes.oneOf(['Pendiente', 'Confirmado', 'Cancelado']).isRequired
    }).isRequired
};

export default AppointmentCard;