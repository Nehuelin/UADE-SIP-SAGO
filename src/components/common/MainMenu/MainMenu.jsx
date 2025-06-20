import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../context/UserContext';
import UserWidget from '../UserWidget/UserWidget';
import './MainMenu.css';

const MainMenu = () => {
    const navigate = useNavigate();
    const { user, loading, error } = useUser();

    const handleNavigation = (path, isExternal = false) => {
        if (isExternal) {
            const basePath = import.meta.env.DEV ? '' : '';
            window.location.href = `${basePath}${path}`;
        } else {
            navigate(path);
        }
    };

    if (loading) {
        return (
            <div className="main-menu-container">
                <div className="loading-state">
                    <span>Cargando...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="main-menu-container">
                <div className="error-state">
                    <span>Error: {error}</span>
                </div>
            </div>
        );
    }

    if (!user) {
        navigate('/login');
        return null;
    }

    const menuOptions = [
        {
            id: 'periodontogram',
            title: 'Periodontograma',
            path: '/periodontal-chart/index.html',
            icon: '🦷',
            isExternal: true,
            roles: ['dentist', 'admin']
        },
        {
            id: 'patient-search',
            title: 'Buscador de Pacientes',
            path: '/buscar-pacientes',
            icon: '🔍',
            roles: ['dentist', 'admin', 'receptionist']
        },
        {
            id: 'patient-register',
            title: 'Registrar Paciente',
            path: '/registrar-paciente',
            icon: '📝',
            roles: ['dentist', 'admin', 'receptionist']
        },
        {
            id: 'schedule',
            title: 'Agenda',
            path: '/agenda',
            icon: '📊',
            roles: ['dentist', 'admin', 'receptionist']
        },
        {
            id: 'cashier',
            title: 'Caja',
            path: '/facturacion',
            icon: '💰',
            roles: ['dentist', 'admin', 'receptionist']
        }
    ];

    const filteredOptions = menuOptions.filter(option =>
        option.roles.includes(user.role)
    );

    return (
        <div className="main-menu-container">
            <div className="main-menu-header">
                <h1 className="main-menu-title">Menu Principal</h1>
                <UserWidget />
            </div>
            <div className="menu-grid">
                {filteredOptions.map((option) => (
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