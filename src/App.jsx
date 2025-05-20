import SignUpForm from "./components/SignUpForm/SignUpForm.jsx";
import LandingPage from './components/LandingPage/LandingPage.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<SignUpForm />} />
                <Route path="/login" element={<LoginForm />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
