import React from "react";
import { BsCart, BsSearch } from "react-icons/bs";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm py-3">
            <div className="container-fluid px-4">
                {/* Logo à gauche */}
                <a className="navbar-brand me-5" href="#">
                    <h2 className="fw-bold text-primary mb-0">myShop</h2>
                </a>

                {/* Bouton toggle mobile */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Contenu principal */}
                <div className="collapse navbar-collapse" id="navbarContent">
                    {/* Barre de recherche centrée */}
                    <div className="d-flex align-items-center mx-4 flex-grow-1">
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control border-end-0" 
                                placeholder="Rechercher des produits..." 
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-secondary border-start-0" type="button">
                                <BsSearch />
                            </button>
                        </div>
                    </div>

                    {/* Menu navigation */}
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <a className="nav-link fw-medium" href="#">Shop</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link fw-medium" href="#">MEN</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link fw-medium" href="#">Women</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link fw-medium" href="#">Kids</a>
                        </li>
                    </ul>

                    {/* Panier avec badge */}
                    <div className="d-flex ms-4">
                        <a className="nav-link position-relative" href="#">
                            <BsCart size={20} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill ">
                                
                                <span className="visually-hidden">articles dans le panier</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;