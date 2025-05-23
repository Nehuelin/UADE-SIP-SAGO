import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import SignUpForm from "./components/SignUpForm/SignUpForm.jsx";
import LandingPage from './components/LandingPage/LandingPage.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import MainMenu from "./components/MainMenu/MainMenu.jsx";
import TestPlayground from "./components/DEV_ONLY/TestPlayground.jsx";
import AgendaMenu from "./components/Agenda/AgendaMenu/AgendaMenu.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<TestPlayground />}/>*/}
                <Route path="/" element={<LandingPage />} />
                <Route path="/registracion" element={<SignUpForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/menu-principal" element={<MainMenu/>} />
                <Route path="/agenda" element={<AgendaMenu/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
