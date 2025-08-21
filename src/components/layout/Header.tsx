import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DevStudio
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors duration-200 font-medium ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Início
            </Link>
            <Link
              to="/servicos"
              className={`transition-colors duration-200 font-medium ${
                isActive('/servicos') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Serviços
            </Link>
            <Link
              to="/portfolio"
              className={`transition-colors duration-200 font-medium ${
                isActive('/portfolio') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Portfólio
            </Link>
            <Link
              to="/sobre"
              className={`transition-colors duration-200 font-medium ${
                isActive('/sobre') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Sobre Nós
            </Link>
            <Link
              to="/contato"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
            >
              Contato
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={closeMenu}
                className={`transition-colors duration-200 font-medium text-left ${
                  isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Início
              </Link>
              <Link
                to="/servicos"
                onClick={closeMenu}
                className={`transition-colors duration-200 font-medium text-left ${
                  isActive('/servicos') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Serviços
              </Link>
              <Link
                to="/portfolio"
                onClick={closeMenu}
                className={`transition-colors duration-200 font-medium text-left ${
                  isActive('/portfolio') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Portfólio
              </Link>
              <Link
                to="/sobre"
                onClick={closeMenu}
                className={`transition-colors duration-200 font-medium text-left ${
                  isActive('/sobre') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Sobre Nós
              </Link>
              <Link
                to="/contato"
                onClick={closeMenu}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 font-medium text-left w-fit"
              >
                Contato
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;