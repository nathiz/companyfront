import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between">
            <h1 className="text-xl font-bold">Gestão de Processos</h1>
            <div>
                <Link to="/" className="mx-2">Inicio</Link>
                <Link to="/areas" className="mx-2">Áreas</Link>
                <Link to="/processos" className="mx-2">Processos</Link>
            </div>
        </nav>
    );
};

export default Navbar;