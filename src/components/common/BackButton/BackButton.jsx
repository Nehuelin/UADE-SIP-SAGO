import { useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    return(
        <button
            type="button"
            className="back-button"
            onClick={handleBackClick}
        >
            ← Volver
        </button>
    )
}

export default BackButton;


