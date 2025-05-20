import SignUpForm from "./components/SignUpForm/SignUpForm.jsx";
import LandingPage from './components/LandingPage/LandingPage.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import TestPlayground from './components/DEV_ONLY/TestPlayground.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import MainMenu from "./components/MainMenu/MainMenu.jsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<TestPlayground />} />*/}
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<SignUpForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/main-menu" element={<MainMenu/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
