import React from "react";
import { Button } from "react-bootstrap";
import clothing from "../../assets/clothing.jpg"

const HeroSection = () => {
    return (
        <section className="hero-section position-relative overflow-hidden">
            <div className="container-fluid px-0">
                <div className="row align-items-center">
                    {/* Texte côté gauche */}
                    <div className="col-lg-6 col-md-12 py-5 px-4 px-lg-5">
                        <h1 className="display-4 fw-bold mb-4">Découvrez notre nouvelle collection</h1>
                        <p className="lead mb-4">
                            Des vêtements premium pour toute la famille. Livraison gratuite à partir de 50€.
                        </p>
                        <div className="d-flex gap-3">
                            <Button variant="primary" size="lg" className="px-4 py-2">
                                Hommes
                            </Button>
                            <Button variant="outline-dark" size="lg" className="px-4 py-2">
                                Femmes
                            </Button>
                        </div>
                    </div>

                    {/* Image côté droit */}
                    <div className="col-lg-6 col-md-12 d-none d-lg-block p-0">
                        <div className="hero-image-container">
                            <img 
                                src={clothing}        
                                 alt="Collection de mode" 
                                className="img-fluid hero-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;