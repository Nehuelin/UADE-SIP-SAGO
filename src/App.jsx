import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import SignUpForm from "./components/auth/SignUpForm/SignUpForm.jsx";
import LandingPage from './components/landing/LandingPage/LandingPage.jsx';
import LoginForm from './components/auth/LoginForm/LoginForm.jsx';
import MainMenu from "./components/common/MainMenu/MainMenu.jsx";
import TestPlayground from "./components/dev/TestPlayground.jsx";
import AgendaMenu from "./components/agenda/AgendaMenu/AgendaMenu.jsx";
import RecoverForm from "./components/auth/RecoverForm/RecoverForm.jsx";

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
