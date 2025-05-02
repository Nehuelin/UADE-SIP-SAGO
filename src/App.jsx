import SignUpForm from "./components/SignUpForm/SignUpForm.jsx";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'


function App() {

  return (
    <>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <SignUpForm />
        </div>
    </>
  )
}

export default App
