import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AgendaView from '../AgendaView/AgendaView';
import './AgendaMenu.css';

const AgendaMenu = () => {
    const navigate = useNavigate();

    // Sample appointments for testing - you can move this to a separate file later
    const sampleAppointments = [
        {
            id: "1",
            date: new Date().toISOString().split('T')[0],
            hour: "09:00",
            patient: { name: "Juan Pérez" },
            professional: { id: "dr1", name: "Dr. Smith" },
            state: "Confirmado"
        },
        {
            id: "2",
            date: new Date().toISOString().split('T')[0],
            hour: "09:30",
            patient: { name: "María García" },
            professional: { id: "dr2", name: "Dr. Johnson" },
            state: "Pendiente"
        },
        {
            id: "3",
            date: new Date().toISOString().split('T')[0],
            hour: "14:00",
            patient: { name: "Carlos Ramírez" },
            professional: { id: "dr3", name: "Dra. López" },
            state: "Cancelado"
        },
        {
            id: "4",
            date: "2025-05-24",
            hour: "08:30",
            patient: { name: "Lucía Fernández" },
            professional: { id: "dr1", name: "Dr. Smith" },
            state: "Pendiente"
        },
        {
            id: "5",
            date: "2025-05-25",
            hour: "11:00",
            patient: { name: "Diego Torres" },
            professional: { id: "dr2", name: "Dr. Johnson" },
            state: "Confirmado"
        },
        {
            id: "6",
            date: "2025-05-26",
            hour: "15:30",
            patient: { name: "Ana Beltrán" },
            professional: { id: "dr3", name: "Dra. López" },
            state: "Pendiente"
        },
        {
            id: "7",
            date: "2025-05-26",
            hour: "18:45",
            patient: { name: "Pedro Gutiérrez" },
            professional: { id: "dr1", name: "Dr. Smith" },
            state: "Cancelado"
        },
        {
            id: "8",
            date: "2025-05-27",
            hour: "10:15",
            patient: { name: "Sofía Márquez" },
            professional: { id: "dr2", name: "Dr. Johnson" },
            state: "Confirmado"
        },
        {
            id: "9",
            date: "2025-05-27",
            hour: "19:00",
            patient: { name: "Javier Medina" },
            professional: { id: "dr3", name: "Dra. López" },
            state: "Pendiente"
        }
    ];


    const [appointments, setAppointments] = useState(sampleAppointments);

    const handleSlotClick = (slotInfo) => {
        console.log('Clicked slot:', slotInfo);
        // Here you'll handle opening the appointment form
    };

    const handleBackClick = () => {
        navigate('/menu-principal');
    };

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
            />
        </div>
    );
}

export default AgendaMenu;


