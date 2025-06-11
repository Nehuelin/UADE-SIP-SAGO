import { useNavigate } from 'react-router-dom';
import './MainMenu.css';

const MainMenu = () => {
    const navigate = useNavigate();

    const handleNavigation = (path, isExternal = false) => {
        if (isExternal) {
            const basePath = import.meta.env.DEV ? '' : '';
            window.location.href = `${basePath}${path}`;
        } else {
            navigate(path);
        }
    };

    const menuOptions = [
        {
            id: 'periodontogram',
            title: 'Periodontograma',
            path: '/periodontal-chart/index.html',
            icon: '🦷',
            isExternal: true
        },
        {
            id: 'patient-search',
            title: 'Buscador de Pacientes',
            path: '/buscar-pacientes',
            icon: '🔍'
        },
        {
            id: 'patient-register',
            title: 'Registrar Paciente',
            path: '/registrar-paciente',
            icon: '📝'
        },
        {
            id: 'schedule',
            title: 'Agenda',
            path: '/agenda',
            icon: '📊'
        },
        {
            id: 'cashier',
            title: 'Caja',
            path: '/facturacion',
            icon: '💰'
        }
    ];

    return (
        <div className="main-menu-container">
            <h1 className="main-menu-title">Menu Principal</h1>
            <div className="menu-grid">
                {menuOptions.map((option) => (
                    <button
                        key={option.id}
                        className="menu-button"
                        onClick={() => handleNavigation(option.path, option.isExternal)}
                    >
                        <span className="menu-icon">{option.icon}</span>
                        <span className="menu-text">{option.title}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MainMenu;