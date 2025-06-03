import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AgendaView from '../AgendaView/AgendaView.jsx';
import './AgendaMenu.css';
import {
    getAppointments,
    addAppointment,
    updateAppointment,
    deleteAppointment
} from '../../../helpers/dbSimulator.js';

const AgendaMenu = () => {
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Cargar las citas al montar el componente
    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                setLoading(true);
                const data = await getAppointments();
                setAppointments(data);
            } catch (err) {
                setError('Error al cargar turnos.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, []);

    const handleSlotClick = async (slotInfo) => {
        // AGREGAR ALGO ACA
    };

    const handleUpdateAppointment = async (id, updatedData) => {
        try {
            const updated = await updateAppointment(id, updatedData);
            if (updated) {
                setAppointments(prev => prev.map(a => a.id === id ? updated : a));
            }
        } catch (err) {
            console.error("Error al actualizar turno:", err);
        }
    };

    const handleDeleteAppointment = async (id) => {
        try {
            const success = await deleteAppointment(id);
            if (success) {
                setAppointments(prev => prev.filter(a => a.id !== id));
            }
        } catch (err) {
            console.error("Error al eliminar turno:", err);
        }
    };

    const handleBackClick = () => {
        navigate('/menu-principal');
    };

    if (loading) return <p>Cargando agenda...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="agenda-menu">
            <div className="agenda-header">
                <button className="back-button" onClick={handleBackClick}>
                    ← Volver al Menú
                </button>
                <h1>Agenda</h1>
            </div>
            <AgendaView
                appointments={appointments}
                onSlotClick={handleSlotClick}
                onUpdate={handleUpdateAppointment}
                onDelete={handleDeleteAppointment}
            />
        </div>
    );
};

export default AgendaMenu;
