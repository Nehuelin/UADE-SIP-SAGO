import PropTypes from 'prop-types';
import './SuccessScreen.css';

const SuccessScreen = ({ onAddAnother, onReturnToMenu }) => {
    return (
        <div className="success-screen">
            <div className="success-content">
                <h2>¡Paciente Registrado Exitosamente!</h2>
                <p>¿Qué desea hacer a continuación?</p>
                <div className="success-buttons">
                    <button onClick={onAddAnother} className="add-another-btn">
                        Registrar Otro Paciente
                    </button>
                    <button onClick={onReturnToMenu} className="return-menu-btn">
                        Volver al Menú Principal
                    </button>
                </div>
            </div>
        </div>
    );
};

SuccessScreen.propTypes = {
    onAddAnother: PropTypes.func.isRequired,
    onReturnToMenu: PropTypes.func.isRequired
};

export default SuccessScreen;