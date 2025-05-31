import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchBillingRecords } from '../../../helpers/dbSimulator';
import {capitalize} from '../../../helpers/stringFunctions.js';
import './BillingList.css';
import Loading from "../../common/Loading/Loading.jsx";

const BillingList = () => {
    const location = useLocation();
    const [bills, setBills] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBills = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const searchParams = new URLSearchParams(location.search);
                const filters = Object.fromEntries(searchParams.entries());
                const results = await searchBillingRecords(filters);
                setBills(results);
            } catch (err) {
                setError('Error al buscar facturas: ' + err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBills();
    }, [location.search]);

    const handleStatusChange = async (billId, newStatus) => {
        newStatus = capitalize(newStatus);

        try {
            alert(`Cambiando estado de factura ${billId} a ${newStatus}`);

            setBills(prevBills =>
                prevBills.map(bill =>
                    bill.id === billId
                        ? { ...bill, billStatus: newStatus }
                        : bill
                )
            );
        } catch (error) {
            console.error('Error updating bill status:', error);
            alert('Error al actualizar el estado de la factura');
        }
    };

    const getStatusText = (status) => {
        switch (status.toLowerCase()) {
            case 'paid':
            case 'cobrado':
                return 'Cobrado';
            case 'pending':
                return 'Pendiente';
            case 'cancelled':
                return 'Cancelado';
            default:
                return status;
        }
    };

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'cobrado':
                return 'status-paid';
            case 'pendiente':
                return 'status-pending';
            case 'cancelado':
                return 'status-cancelled';
            default:
                return '';
        }
    };

    if (isLoading) return <Loading/>;
    if (error) return <div className="error-message">{error}</div>;

    return (
        <div className="billing-list-container">
            <h1>Lista de Facturas</h1>

            {bills.length === 0 ? (
                <div className="no-results">
                    No se encontraron facturas con los criterios de búsqueda especificados.
                </div>
            ) : (
                <div className="billing-list-table">
                    <div className="table-header">
                        <div className="header-cell">Paciente</div>
                        <div className="header-cell">Monto</div>
                        <div className="header-cell">Método de Pago</div>
                        <div className="header-cell">Estado</div>
                        <div className="header-cell">Cambiar Estado</div>
                    </div>

                    {bills.map(bill => (
                        <div key={bill.id} className="table-row">
                            <div className="table-cell patient-cell">
                                <div className="patient-name">
                                    {`${bill.patientInfo.name} ${bill.patientInfo.surname}`}
                                </div>
                                <div className="bill-details">
                                    <span>Factura N°: {bill.billNumber}</span>
                                    <span>Fecha: {new Date(bill.billDate).toLocaleDateString()}</span>
                                </div>
                            </div>
                            <div className="table-cell amount-cell">
                                ${bill.amount.toLocaleString()}
                            </div>
                            <div className="table-cell payment-method-cell">
                                {bill.paymentMethod}
                            </div>
                            <div className="table-cell status-cell">
                                <span className={`status-badge ${getStatusColor(bill.billStatus)}`}>
                                    {getStatusText(bill.billStatus)}
                                </span>
                            </div>
                            <div className="table-cell status-change-cell">
                                <select
                                    value=""
                                    onChange={(e) => handleStatusChange(bill.id, e.target.value)}
                                    className="status-select"
                                    disabled={bill.billStatus.toLowerCase() === 'cancelled'}
                                >
                                    <option value="">Cambiar estado</option>
                                    <option value="cobrado">Cobrado</option>
                                    <option value="pendiente">Pendiente</option>
                                    <option value="cancelado">Cancelado</option>
                                </select>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BillingList;