import React from "react";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light fixed-top">  
            <div className="container-fluid">
                <h2 className="navbar-brand mb-0">myShop</h2>
                
                {/* Bouton pour mobile */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                {/* Menu principal */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">  {/* ms-auto pour aligner à droite */}
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
                    <li className="nav-item ms-auto">
                             <a className="nav-link" href="#">
                               <i className="bi bi-cart"></i> Panier
                            </a>
                    </li>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;