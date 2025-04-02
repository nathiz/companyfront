import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
    return (
        <aside className="w-64 h-screen bg-gray-800 text-white p-4">
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            <nav>
                <ul className="space-y-2">
                    <li>
                        <Link to="/" className="block p-2 hover:bg-gray-700 rounded">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/areas" className="block p-2 hover:bg-gray-700 rounded">
                            Áreas
                        </Link>
                    </li>
                    <li>
                        <Link to="/processos" className="block p-2 hover:bg-gray-700 rounded">
                            Processos
                        </Link>
                    </li>
                    <li>
                        <Link to="/subprocessos" className="block p-2 hover:bg-gray-700 rounded">
                            SubProcessos
                        </Link>
                    </li>
                    <li>
                        <Link to="/ferramentas" className="block p-2 hover:bg-gray-700 rounded"> {/* Link para Ferramentas */}
                            Ferramentas
                        </Link>
                    </li>
                    <li>
                        <Link to="/documentos" className="block p-2 hover:bg-gray-700 rounded">
                            Documentos
                        </Link>
                    </li>
                    <li>
                        <Link to="/responsaveis" className="block p-2 hover:bg-gray-700 rounded">
                            Responsáveis
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;