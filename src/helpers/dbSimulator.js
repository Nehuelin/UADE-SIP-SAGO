
// DATA DE AGENDA
const appointments = [
    {
        id: "1",
        date: new Date().toISOString().split('T')[0],
        hour: "09:00",
        patient: { name: "Juan", surname: "Perez" },
        professional: { id: "dr1", name: "Dr. Smith" },
        state: "Confirmado"
    },
    {
        id: "2",
        date: new Date().toISOString().split('T')[0],
        hour: "09:30",
        patient: { name: "María", surname: "Garcia" },
        professional: { id: "dr2", name: "Dr. Johnson" },
        state: "Pendiente"
    },
    {
        id: "3",
        date: new Date().toISOString().split('T')[0],
        hour: "14:00",
        patient: { name: "Carlos", surname: "Ramirez" },
        professional: { id: "dr3", name: "Dra. López" },
        state: "Cancelado"
    },
    {
        id: "4",
        date: "2025-05-24",
        hour: "08:30",
        patient: { name: "Lucía", surname: "Fernandez" },
        professional: { id: "dr1", name: "Dr. Smith" },
        state: "Pendiente"
    },
    {
        id: "5",
        date: "2025-05-25",
        hour: "11:00",
        patient: { name: "Diego", surname: "Torres" },
        professional: { id: "dr2", name: "Dr. Johnson" },
        state: "Confirmado"
    },
    {
        id: "6",
        date: "2025-05-26",
        hour: "15:30",
        patient: { name: "Ana", surname: "Beltrán" },
        professional: { id: "dr3", name: "Dra. López" },
        state: "Pendiente"
    },
    {
        id: "7",
        date: "2025-05-26",
        hour: "18:45",
        patient: { name: "Pedro", surname: "Gutiérrez" },
        professional: { id: "dr1", name: "Dr. Smith" },
        state: "Cancelado"
    },
    {
        id: "8",
        date: "2025-05-27",
        hour: "10:15",
        patient: { name: "Sofía", surname: "Marquez" },
        professional: { id: "dr2", name: "Dr. Johnson" },
        state: "Confirmado"
    },
    {
        id: "9",
        date: "2025-05-27",
        hour: "19:00",
        patient: { name: "Javier", surname: "Medina" },
        professional: { id: "dr3", name: "Dra. López" },
        state: "Pendiente"
    }
];



// DATA DE PACIENTES
const patients = [
    {
        id: "1",
        name: "María",
        surname: "García",
        dni: "30123456",
        patientNumber: "P001",
        phoneNumber: "11-4567-8901",
        photo: "/default-avatar.png",
        birthDate: "12/05/1990",
        age: "33",
        gender: "Femenino",
        maritalStatus: "Soltera",
        nationality: "Argentina",
        address: "Av. Santa Fe 1234, CABA",
        email: "maria.garcia@email.com",
        allergies: "Ninguna",
        chronicDiseases: "Ninguna",
        medications: "Ninguna",
        bloodType: "O+",
        observations: "Paciente en buen estado general",
        healthPlan: "Swiss Medical",
        healthPlanNumber: "SMG123456",
        coverage: "Plan 400",
        admissionDate: "01/03/2024",
        lastUpdate: "15/03/2024",
        healthInsurance: "Swiss Medical",
        healthInsuranceNumber: "SMG123456"
    },
    {
        id: "2",
        name: "Carlos",
        surname: "Rodríguez",
        dni: "25789012",
        patientNumber: "P002",
        phoneNumber: "11-2345-6789",
        photo: "/default-avatar.png",
        birthDate: "23/08/1975",
        age: "48",
        gender: "Masculino",
        maritalStatus: "Casado",
        nationality: "Argentina",
        address: "Belgrano 567, CABA",
        email: "carlos.rodriguez@email.com",
        allergies: "Penicilina",
        chronicDiseases: "Hipertensión",
        medications: "Losartán 50mg",
        bloodType: "A+",
        observations: "Control periódico de presión arterial",
        healthPlan: "OSDE",
        healthPlanNumber: "OSD789012",
        coverage: "Plan 210",
        admissionDate: "15/02/2024",
        lastUpdate: "14/03/2024",
        healthInsurance: "OSDE",
        healthInsuranceNumber: "OSD789012"
    },
    {
        id: "3",
        name: "Ana",
        surname: "Martínez",
        dni: "35456789",
        patientNumber: "P003",
        phoneNumber: "11-8901-2345",
        photo: "/default-avatar.png",
        birthDate: "30/11/1995",
        age: "28",
        gender: "Femenino",
        maritalStatus: "Soltera",
        nationality: "Argentina",
        address: "Corrientes 890, CABA",
        email: "ana.martinez@email.com",
        allergies: "Polen",
        chronicDiseases: "Asma",
        medications: "Salbutamol",
        bloodType: "B-",
        observations: "Control estacional de asma",
        healthPlan: "Galeno",
        healthPlanNumber: "GAL345678",
        coverage: "Plan Oro",
        admissionDate: "10/01/2024",
        lastUpdate: "12/03/2024",
        healthInsurance: "Galeno",
        healthInsuranceNumber: "GAL345678"
    }
];

// HISTORIAL CLINICO
const clinicalHistories = {
    "1": [
        {
            id: "CH001",
            date: "15/03/2024",
            diagnosis: "Control de rutina",
            treatment: "No requiere",
            notes: "Paciente en buen estado",
            doctorId: "D001"
        },
        {
            id: "CH002",
            date: "01/03/2024",
            diagnosis: "Consulta inicial",
            treatment: "Exámenes de rutina",
            notes: "Primera consulta",
            doctorId: "D001"
        }
    ],
    "2": [
        {
            id: "CH003",
            date: "14/03/2024",
            diagnosis: "Hipertensión controlada",
            treatment: "Continuar con Losartán 50mg",
            notes: "Próximo control en 30 días",
            doctorId: "D002"
        },
        {
            id: "CH004",
            date: "15/02/2024",
            diagnosis: "Control inicial",
            treatment: "Inicio Losartán 50mg",
            notes: "Control de presión semanal",
            doctorId: "D002"
        }
    ],
    "3": [
        {
            id: "CH005",
            date: "12/03/2024",
            diagnosis: "Crisis asmática leve",
            treatment: "Refuerzo de Salbutamol",
            notes: "Seguimiento en 7 días",
            doctorId: "D001"
        },
        {
            id: "CH006",
            date: "10/01/2024",
            diagnosis: "Evaluación inicial",
            treatment: "Plan de control de asma",
            notes: "Paciente estable",
            doctorId: "D003"
        }
    ]
};

// FACTURACION
const billingData = [
    {
        id: "BILL001",
        billNumber: "F0001",
        billDate: "2024-03-14",
        billStatus: "Cobrado",
        paymentMethod: "Transferencia Bancaria",
        amount: 12000,
        patientInfo: {
            name: "María",
            surname: "García",
            id: "1",
            patientNumber: "P001",
            phoneNumber: "11-4567-8901",
            healthInsurance: "Swiss Medical",
            healthInsuranceNumber: "SMG123456"
        },
        items: [
            { description: "Consulta médica", amount: 12000 }
        ]
    },
    {
        id: "BILL002",
        billNumber: "F0002",
        billDate: "2024-03-13",
        billStatus: "Cancelado",
        paymentMethod: "Efectivo",
        amount: 25000,
        patientInfo: {
            name: "Carlos",
            surname: "Rodríguez",
            id: "2",
            patientNumber: "P002",
            phoneNumber: "11-2345-6789",
            healthInsurance: "OSDE",
            healthInsuranceNumber: "OSD789012"
        },
        items: [
            { description: "Consulta médica", amount: 8000 },
            { description: "Ecografía", amount: 17000 }
        ]
    },
    {
        id: "BILL003",
        billNumber: "F0003",
        billDate: "2024-03-16",
        billStatus: "Pendiente",
        paymentMethod: "Tarjeta de Credito",
        amount: 30000,
        patientInfo: {
            name: "Ana",
            surname: "Martínez",
            id: "3",
            patientNumber: "P003",
            phoneNumber: "11-8901-2345",
            healthInsurance: "Galeno",
            healthInsuranceNumber: "GAL345678"
        },
        items: [
            { description: "Consulta especialista", amount: 15000 },
            { description: "Análisis de laboratorio", amount: 15000 }
        ]
    },
    {
        id: "BILL005",
        billNumber: "F0005",
        billDate: "2024-03-16",
        billStatus: "Cobrado",
        paymentMethod: "Tarjeta de Debito",
        amount: 20000,
        patientInfo: {
            name: "Pedro",
            surname: "López",
            id: "5",
            patientNumber: "P005",
            phoneNumber: "2233445566",
            healthInsurance: "Swiss Medical",
            healthInsuranceNumber: "SM11223"
        },
        items: [
            { description: "Consulta médica", amount: 8000 },
            { description: "Procedimiento", amount: 12000 }
        ]
    }
];


const simulateDB = async () => {
    const delay = Math.floor(Math.random() * (2000 - 1000 + 1) + 1000);
    await new Promise(resolve => setTimeout(resolve, delay));
    return true;
};


export const getPatient = async (patientId) => {
    await simulateDB();
    return patients.find(patient => patient.id === patientId);
};

export const getPatientClinicalHistory = async (patientId) => {
    await simulateDB();
    return clinicalHistories[patientId] || [];
};

export const addClinicalHistoryEntry = async (patientId, entry) => {
    await simulateDB();
    if (!clinicalHistories[patientId]) {
        clinicalHistories[patientId] = [];
    }
    const newEntry = {
        id: `CH${String(Object.keys(clinicalHistories).length + 1).padStart(3, '0')}`,
        date: new Date().toLocaleDateString('es-AR'),
        ...entry
    };
    clinicalHistories[patientId].unshift(newEntry);
    return newEntry;
};

export const updateClinicalHistoryEntry = async (patientId, entryId, updatedData) => {
    await simulateDB();
    const patientHistory = clinicalHistories[patientId];
    if (!patientHistory) return false;

    const entryIndex = patientHistory.findIndex(entry => entry.id === entryId);
    if (entryIndex === -1) return false;

    clinicalHistories[patientId][entryIndex] = {
        ...patientHistory[entryIndex],
        ...updatedData
    };
    return true;
};

export const searchPatients = async (filters) => {
    await simulateDB();
    return patients.filter(patient => {
        return Object.entries(filters).every(([key, value]) => {
            if (!value) return true;
            const patientValue = patient[key]?.toLowerCase();
            return patientValue?.includes(value.toLowerCase());
        });
    });
};

export const getAppointments = async () => {
    await simulateDB();
    return appointments;
};

export const getAppointmentsByDate = async (date) => {
    await simulateDB();
    return appointments.filter(appointment => appointment.date === date);
};

export const addAppointment = async (appointmentData) => {
    await simulateDB();
    const newAppointment = {
        id: `${appointments.length + 1}`,
        ...appointmentData,
        state: "Pendiente"
    };
    appointments.push(newAppointment);
    return newAppointment;
};

export const updateAppointment = async (id, updatedData) => {
    await simulateDB();
    const index = appointments.findIndex(appointment => appointment.id === id);
    if (index === -1) return false;

    appointments[index] = {
        ...appointments[index],
        ...updatedData
    };
    return appointments[index];
};

export const deleteAppointment = async (id) => {
    await simulateDB();
    const index = appointments.findIndex(appointment => appointment.id === id);
    if (index === -1) return false;

    appointments.splice(index, 1);
    return true;
};

export const getAppointmentsByProfessional = async (professionalId) => {
    await simulateDB();
    return appointments.filter(
        appointment => appointment.professional.id === professionalId
    );
};

export const searchBillingRecords = async (searchParams) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let filteredBills = [...billingData];

            // Filter based on search parameters
            if (searchParams) {
                filteredBills = filteredBills.filter(bill => {
                    const matchesName = !searchParams.name ||
                        bill.patientInfo.name.toLowerCase().includes(searchParams.name.toLowerCase());
                    const matchesSurname = !searchParams.surname ||
                        bill.patientInfo.surname.toLowerCase().includes(searchParams.surname.toLowerCase());
                    const matchesId = !searchParams.id ||
                        bill.patientInfo.id.includes(searchParams.id);
                    const matchesPatientNumber = !searchParams.patientNumber ||
                        bill.patientInfo.patientNumber.includes(searchParams.patientNumber);
                    const matchesBillNumber = !searchParams.billNumber ||
                        bill.billNumber.includes(searchParams.billNumber);
                    const matchesBillDate = !searchParams.billDate ||
                        bill.billDate === searchParams.billDate;
                    const matchesBillStatus = !searchParams.billStatus ||
                        bill.billStatus === searchParams.billStatus;
                    const matchesPaymentMethod = !searchParams.paymentMethod ||
                        bill.paymentMethod === searchParams.paymentMethod;

                    return matchesName && matchesSurname && matchesId &&
                        matchesPatientNumber && matchesBillNumber &&
                        matchesBillDate && matchesBillStatus && matchesPaymentMethod;
                });
            }

            resolve(filteredBills);
        }, 50);
    });
};

export const fetchPeriodontalData = async () => {

};
