import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from 'react-router-dom';
import "./SignUpForm.css";
import {simulateAuth} from "../../helpers/authSimulator.js";
import Loading from "../Loading/Loading.jsx";

const SignUpForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        surname: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');


    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        setIsLoading(true);


        try {
            await simulateAuth();
            console.log("Datos del formulario:", formData);
            navigate('/menu-principal');
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
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <h2 className="signup-title">Crear Cuenta</h2>
                {error && <div className="error-message">{error}</div>}
                <div className="signup-field">
                    <label htmlFor="name" className="signup-label">Nombre:</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="signup-input"
                        required
                    />
                </div>

                <div className="signup-field">
                    <label htmlFor="name" className="signup-label">Apellido:</label>
                    <input
                        id="surname"
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        className="signup-input"
                        required
                    />
                </div>
                
                <div className="signup-field">
                    <label htmlFor="email" className="signup-label">Correo electrónico:</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="signup-input"
                        required
                    />
                </div>

                <div className="signup-field">
                    <label htmlFor="password" className="signup-label">Contraseña:</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="signup-input"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="signup-button">Registrarse</button>

                <p>
                    ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
                </p>
                <Link to="/" className="back-link">Volver al Inicio</Link>
            </form>
        </div>
    );
};

export default SignUpForm;
