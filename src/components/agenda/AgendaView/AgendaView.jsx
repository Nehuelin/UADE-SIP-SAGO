
import { useState } from 'react';
import PropTypes from 'prop-types';
import AgendaControls from '../AgendaControls/AgendaControls.jsx';
import AppointmentCard from '../AppointmentCard/AppointmentCard.jsx';
import './AgendaView.css';

const AgendaView = ({ appointments = [], onSlotClick }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedProfessional, setSelectedProfessional] = useState('all');

    const timeSlots = Array.from({ length: 25 }, (_, i) => {
        const hour = Math.floor(i / 2) + 8;
        const minutes = i % 2 === 0 ? '00' : '30';
        return `${hour.toString().padStart(2, '0')}:${minutes}`;
    });

    const filterAppointments = (apps) => {
        return apps.filter(app => {
            const appDate = new Date(app.date);
            const sameDate = (
                appDate.getDate() === currentDate.getDate() &&
                appDate.getMonth() === currentDate.getMonth() &&
                appDate.getFullYear() === currentDate.getFullYear()
            );

            if (selectedProfessional === 'all') {
                return sameDate;
            }
            return sameDate && app.professional.id === selectedProfessional;
        });
    };

    const getAppointmentsForTimeSlot = (timeSlot) => {
        return filterAppointments(appointments).filter(
            app => app.hour === timeSlot
        );
    };

    const handleSlotClick = (timeSlot) => {
        if (onSlotClick) {
            onSlotClick({
                date: currentDate,
                hour: timeSlot,
                professional: selectedProfessional
            });
        }
    };

    return (
        <div className="agenda-container">
            <AgendaControls
                currentDate={currentDate}
                setDate={setCurrentDate}
                selectedProfessional={selectedProfessional}
                onProfessionalChange={setSelectedProfessional}
            />

            <div className="agenda-grid">
                <div className="time-column">
                    {timeSlots.map(time => (
                        <div key={time} className="time-slot">
                            {time}
                        </div>
                    ))}
                </div>

                <div className="appointments-column">
                    {timeSlots.map(timeSlot => {
                        const slotAppointments = getAppointmentsForTimeSlot(timeSlot);

                        return (
                            <div
                                key={timeSlot}
                                className="appointment-slot"
                                onClick={() => handleSlotClick(timeSlot)}
                            >
                                {slotAppointments.length > 0 ? (
                                    slotAppointments.map(appointment => (
                                        <AppointmentCard
                                            key={appointment.id}
                                            appointment={appointment}
                                        />
                                    ))
                                ) : (
                                    <div className="empty-slot" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

AgendaView.propTypes = {
    appointments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            date: PropTypes.string.isRequired,
            hour: PropTypes.string.isRequired,
            patient: PropTypes.shape({
                name: PropTypes.string.isRequired,
            }).isRequired,
            professional: PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
            }).isRequired,
            state: PropTypes.string.isRequired,
        })
    ),
    onSlotClick: PropTypes.func,
};

export default AgendaView;
