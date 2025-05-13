import React from "react";
import { BsCart } from "react-icons/bs"; // Import de l'icône panier

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
            <div className="collapse navbar-collapse" id="navbarNav">
    {/* Logo à gauche */}
    <h2 className="navbar-brand me-auto mb-0">myShop</h2>
    
    {/* Menu centré */}
    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">MEN</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Women</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Kids</a>
                        </li>
                    </ul>
    
    {/* Panier à droite */}
    <div className="ms-auto">
        <a className="nav-link" href="#">
            <BsCart size={20} />
        </a>
    </div>
</div>
        </nav>
    );
};

export default Navigation;