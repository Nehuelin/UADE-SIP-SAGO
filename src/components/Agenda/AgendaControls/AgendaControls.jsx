import { useState } from 'react';
import PropTypes from 'prop-types';
import './AgendaControls.css';

const AgendaControls = ({ currentDate, setDate }) => {
    const [selectedProfessional, setSelectedProfessional] = useState('all');

    const professionals = [
        { id: 'all', name: 'Todos los Profesionales' },
        { id: 'dr1', name: 'Dr. Smith' },
        { id: 'dr2', name: 'Dr. Johnson' },
        { id: 'dr3', name: 'Dr. Williams' }
    ];

    const handlePreviousDay = () => {
        const prevDay = new Date(currentDate);
        prevDay.setDate(currentDate.getDate() - 1);
        setDate(prevDay);
    };

    const handleNextDay = () => {
        const nextDay = new Date(currentDate);
        nextDay.setDate(currentDate.getDate() + 1);
        setDate(nextDay);
    };

    const handleCurrentDay = () => {
        setDate(new Date());
    };

    const handleDateChange = (e) => {
        setDate(new Date(e.target.value));
    };

    const handleProfessionalChange = (e) => {
        setSelectedProfessional(e.target.value);
    };

    const formatDateForInput = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${year}-${month}-${day}`; // HTML date input requires yyyy-mm-dd format
    };

    const formatDateDisplay = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div className="agenda-controls">
            <div className="date-navigation">
                <button
                    className="control-btn"
                    onClick={handlePreviousDay}
                    aria-label="Previous Day"
                >
                    ←
                </button>

                <div className="date-selector">
                    <input
                        type="date"
                        value={formatDateForInput(currentDate)}
                        onChange={handleDateChange}
                        className="date-input"
                        data-date={formatDateDisplay(currentDate)}
                    />
                    <button
                        className="today-btn"
                        onClick={handleCurrentDay}
                    >
                        Hoy
                    </button>
                </div>

                <button
                    className="control-btn"
                    onClick={handleNextDay}
                    aria-label="Next Day"
                >
                    →
                </button>
            </div>

            <div className="professional-filter">
                <select
                    value={selectedProfessional}
                    onChange={handleProfessionalChange}
                    className="professional-select"
                >
                    {professionals.map(prof => (
                        <option key={prof.id} value={prof.id}>
                            {prof.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

AgendaControls.propTypes = {
    currentDate: PropTypes.instanceOf(Date).isRequired,
    setDate: PropTypes.func.isRequired
};

export default AgendaControls;