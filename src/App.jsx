import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import SignUpForm from "./components/auth/SignUpForm/SignUpForm.jsx";
import LandingPage from './components/landing/LandingPage/LandingPage.jsx';
import LoginForm from './components/auth/LoginForm/LoginForm.jsx';
import MainMenu from "./components/common/MainMenu/MainMenu.jsx";
import AgendaMenu from "./components/agenda/AgendaMenu/AgendaMenu.jsx";
import PatientForm from "./components/patient/patientRegister/PatientForm/PatientForm.jsx";
import PatientFindForm from "./components/patient/patientFinder/PatientFindForm/PatientFindForm.jsx";
import PatientList from "./components/patient/patientFinder/PatientList/PatientList.jsx";
import PatientRecord from "./components/patient/PatientRecord/PatientRecord.jsx";
import ClinicalHistory from "./components/patient/ClinicalHistory/ClinicalHistory.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rutas publicas */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/registracion" element={<SignUpForm />} />
                <Route path="/login" element={<LoginForm />} />

                {/* Rutas protegidas, agregar autenticacion */}
                <Route path="/menu-principal" element={<MainMenu />} />
                <Route path="/agenda" element={<AgendaMenu />} />

                {/* Rutas de pacientes */}
                <Route path="/buscar-pacientes" element={<PatientFindForm />} />
                <Route path="/buscar-pacientes/lista" element={<PatientList />} />
                <Route path="/ficha-paciente/:id" element={<PatientRecord />} />
                <Route path="/registrar-paciente" element={<PatientForm />} />
                <Route path="/historial-clinico/:id" element={<ClinicalHistory />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;