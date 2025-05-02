import { useState } from "react";
import "./SignUpForm.css";

export default function SignUpForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos del formulario:", formData);
    };

    return (
        <form onSubmit={handleSubmit} className="signup-container">
            <h2 className="signup-title">Crear cuenta</h2>

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

            <button type="submit" className="signup-button">Registrarse</button>
        </form>
    );
}