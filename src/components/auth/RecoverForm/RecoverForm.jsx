import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './RecoverForm.css';

const RecoverForm = ({ onRecover, returnTo }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await onRecover(email);
            setSuccess(true);
            // Reset form
            setEmail('');
        } catch (err) {
            setError(err.message || 'Failed to send recovery email. Please try again.');
        }
    };

    const handleBackToLogin = () => {
        navigate('/'+returnTo);
    };

    return (
        <div className="recover-form-container">
            <h2>Password Recovery</h2>
            {!success ? (
                <form onSubmit={handleSubmit} className="recover-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <div className="form-actions">
                        <button type="submit" className="recover-button">
                            Send Recovery Email
                        </button>
                        <button
                            type="button"
                            className="back-button"
                            onClick={handleBackToLogin}
                        >
                            Back to Login
                        </button>
                    </div>
                </form>
            ) : (
                <div className="success-message">
                    <p>Recovery email sent! Please check your inbox for further instructions.</p>
                    <button
                        type="button"
                        className="back-button"
                        onClick={handleBackToLogin}
                    >
                        Back to Login
                    </button>
                </div>
            )}
        </div>
    );
};

RecoverForm.propTypes = {
    onRecover: PropTypes.func.isRequired,
    returnTo: PropTypes.string.isRequired
};

export default RecoverForm;
