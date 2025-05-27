import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { simulateAuth } from '../../../helpers/authSimulator.js';
import Loading from '../../common/Loading/Loading.jsx';
import './LoginForm.css';

const LoginForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            await simulateAuth();
            // If successful, navigate to main menu
            navigate('/menu-principal');
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };


    const handleChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
                {error && <div className="error-message">{error}</div>}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                <p>
                    ¿No tienes una cuenta? <Link to="/registracion">Regístrate aquí</Link>
                </p>
                <Link to="/" className="back-link">Volver al Inicio</Link>
            </form>
            <p className="men_in_black">DEV ONLY: Actualmente esta en funcionamiento una simulacion de Fetch de datos.</p>
            <p className="men_in_black">Al apretar Login, el loader dura entre 3 y 5 segundos</p>
            <p className="men_in_black">Despues de eso, hay chances del 1 en 5 de recibir un error de autenticacion</p>
            <p className="men_in_black">Si no ocurre, se continua la navegacion al menu principal</p>
        </div>
    );
};

export default LoginForm;