import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import SAGO_logo from '../../../assets/SAGO_logo.jpg';

const LandingPage = () => {
const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <div className="landing-container">
            <div className="welcome-message">
                <h1>Bienvenido a SAGO</h1>
                <p>Dato curioso, odio esta materia</p>
            </div>
            <div className="logo-container">
                <img src={SAGO_logo} alt="SAGO Logo" className="sago-logo" />
            </div>
            <div className="buttons-container">
                <button
                    className="landing-button login-button"
                    onClick={handleLogin}
                >
                    Login
                </button>
                <button
                    className="landing-button register-button"
                    onClick={handleRegister}
                >
                    Registrarse
                </button>
            </div>
        </div>
    );
};

export default LandingPage;
